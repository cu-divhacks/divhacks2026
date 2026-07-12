'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './PuzzleGame.module.css';

const COLS = 4;
const ROWS = 3;
const COUNT = COLS * ROWS;
const GAP = 8;

type Slot = {
    index: number;
    x: number;
    y: number;
};

type Piece = {
    id: number;
    correctSlotIndex: number;
    slotIndex: number;
    image: string;
};

type DragState = {
    pieceId: number;
    fromSlotIndex: number;
    offsetX: number;
    offsetY: number;
    left: number;
    top: number;
};

function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function cssVar(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function cssVarRgba(name: string, alpha: number): string {
    const hex = cssVar(name).replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const PuzzleGame: React.FC = () => {
    const boardRef = useRef<HTMLDivElement | null>(null);
    const [boardSize, setBoardSize] = useState({ width: 640, height: 400 });

    const [moves, setMoves] = useState(0);
    const [timeText, setTimeText] = useState('00:00');
    const [message, setMessage] = useState('');
    const [gameWon, setGameWon] = useState(false);
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [drag, setDrag] = useState<DragState | null>(null);

    const startTimeRef = useRef<number | null>(null);
    const timerRef = useRef<number | null>(null);

    const tileW = useMemo(() => {
        return Math.floor((boardSize.width - GAP * (COLS + 1)) / COLS);
    }, [boardSize.width]);

    const tileH = useMemo(() => {
        return Math.floor((boardSize.height - GAP * (ROWS + 1)) / ROWS);
    }, [boardSize.height]);

    const slots: Slot[] = useMemo(() => {
        const list: Slot[] = [];
        for (let i = 0; i < COUNT; i++) {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            list.push({
                index: i,
                x: GAP + col * (tileW + GAP),
                y: GAP + row * (tileH + GAP),
            });
        }
        return list;
    }, [tileW, tileH]);

    const startTimerIfNeeded = () => {
        if (startTimeRef.current !== null || gameWon) return;
        startTimeRef.current = Date.now();
        timerRef.current = window.setInterval(() => {
            if (startTimeRef.current === null) return;
            const secs = Math.floor((Date.now() - startTimeRef.current) / 1000);
            const mm = String(Math.floor(secs / 60)).padStart(2, '0');
            const ss = String(secs % 60).padStart(2, '0');
            setTimeText(`${mm}:${ss}`);
        }, 250);
    };

    const resetTimer = () => {
        if (timerRef.current !== null) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
        }
        startTimeRef.current = null;
        setTimeText('00:00');
    };

    const buildTileImages = (width: number, height: number) => {
        const source = document.createElement('canvas');
        source.width = COLS * width;
        source.height = ROWS * height;
        const ctx = source.getContext('2d');
        if (!ctx) return [];

        const grad = ctx.createLinearGradient(0, 0, source.width, source.height);
        grad.addColorStop(0, cssVar('--color-lightteal'));
        grad.addColorStop(0.55, cssVar('--color-darkpink'));
        grad.addColorStop(1, cssVar('--color-lightpink'));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, source.width, source.height);

        for (let i = 0; i < 18; i++) {
            ctx.fillStyle = i % 2 === 0 ? cssVarRgba('--color-white', 0.09) : cssVarRgba('--color-white', 0.05);
            ctx.beginPath();
            ctx.arc(Math.random() * source.width, Math.random() * source.height, 8 + Math.random() * 28, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = cssVarRgba('--color-black', 0.22);
        ctx.font = `900 ${Math.floor(height * 0.72)}px 'Sedgwick Ave Display', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('CU DIVHACKS', source.width / 2 + 2, source.height / 2 + 3);

        ctx.fillStyle = cssVar('--color-white');
        ctx.fillText('CU DIVHACKS', source.width / 2, source.height / 2);

        ctx.strokeStyle = cssVarRgba('--color-white', 0.55);
        ctx.lineWidth = 2;
        ctx.strokeRect(3, 3, source.width - 6, source.height - 6);

        const images: string[] = [];
        for (let i = 0; i < COUNT; i++) {
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            const tile = document.createElement('canvas');
            tile.width = width;
            tile.height = height;
            const tctx = tile.getContext('2d');
            if (!tctx) continue;
            tctx.drawImage(source, col * width, row * height, width, height, 0, 0, width, height);
            images.push(tile.toDataURL());
        }

        return images;
    };

    const resetAndShuffle = (sourcePieces?: Piece[]) => {
        const base = sourcePieces ?? pieces;
        const shuffledSlots = shuffleArray(Array.from({ length: COUNT }, (_, i) => i));
        const next = base.map((piece, idx) => ({
            ...piece,
            slotIndex: shuffledSlots[idx],
        }));
        setPieces(next);
        setMoves(0);
        setMessage('');
        setGameWon(false);
        setDrag(null);
        resetTimer();
    };

    useEffect(() => {
        const board = boardRef.current;
        if (!board) return;

        const update = () => {
            const rect = board.getBoundingClientRect();
            const width = Math.max(320, Math.floor(rect.width));
            const height = Math.max(220, Math.floor(rect.height));
            setBoardSize((prev) => {
                if (prev.width === width && prev.height === height) return prev;
                return { width, height };
            });
        };

        update();
        const observer = new ResizeObserver(update);
        observer.observe(board);
        window.addEventListener('resize', update);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);

    useEffect(() => {
        const images = buildTileImages(tileW, tileH);
        const basePieces: Piece[] = images.map((image, i) => ({
            id: i,
            correctSlotIndex: i,
            slotIndex: i,
            image,
        }));
        resetAndShuffle(basePieces);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tileW, tileH]);

    useEffect(() => {
        const canvas = document.getElementById('puzzle-grid') as HTMLCanvasElement | null;
        if (!canvas) return;
        canvas.width = boardSize.width;
        canvas.height = boardSize.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, boardSize.width, boardSize.height);
        ctx.strokeStyle = cssVarRgba('--color-lightteal', 0.28);
        ctx.lineWidth = 1;
        for (const slot of slots) {
            ctx.strokeRect(slot.x, slot.y, tileW, tileH);
        }
    }, [boardSize, slots, tileW, tileH]);

    useEffect(() => {
        if (pieces.length !== COUNT) return;
        const won = pieces.every((piece) => piece.slotIndex === piece.correctSlotIndex);
        if (!won || gameWon) return;

        setGameWon(true);
        if (timerRef.current !== null) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setMessage(`Solved in ${timeText} with ${moves} moves. Nice!`);
    }, [pieces, gameWon, timeText, moves]);

    useEffect(() => {
        if (!drag) return;

        const onMove = (e: PointerEvent) => {
            const board = boardRef.current;
            if (!board) return;
            const rect = board.getBoundingClientRect();
            const left = e.clientX - rect.left - drag.offsetX;
            const top = e.clientY - rect.top - drag.offsetY;
            setDrag((prev) => {
                if (!prev) return prev;
                return { ...prev, left, top };
            });
        };

        const onEnd = (e: PointerEvent) => {
            const board = boardRef.current;
            if (!board || !drag) {
                setDrag(null);
                return;
            }

            const rect = board.getBoundingClientRect();
            const localX = e.clientX - rect.left;
            const localY = e.clientY - rect.top;
            let nearestIndex: number | null = null;
            let bestDist = Number.POSITIVE_INFINITY;

            for (const slot of slots) {
                const cx = slot.x + tileW / 2;
                const cy = slot.y + tileH / 2;
                const d = Math.hypot(localX - cx, localY - cy);
                if (d < bestDist) {
                    bestDist = d;
                    nearestIndex = slot.index;
                }
            }

            if (nearestIndex === null || bestDist > Math.max(tileW, tileH) * 0.7) {
                setDrag(null);
                return;
            }

            setPieces((prev) => {
                const targetPiece = prev.find((p) => p.id === drag.pieceId);
                if (!targetPiece) return prev;
                if (nearestIndex === targetPiece.slotIndex) return prev;

                const occupyingPiece = prev.find((p) => p.slotIndex === nearestIndex);
                if (!occupyingPiece) return prev;

                return prev.map((p) => {
                    if (p.id === targetPiece.id) {
                        return { ...p, slotIndex: nearestIndex as number };
                    }
                    if (p.id === occupyingPiece.id) {
                        return { ...p, slotIndex: drag.fromSlotIndex };
                    }
                    return p;
                });
            });

            setMoves((m) => m + 1);
            setDrag(null);
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onEnd, { once: true });
        window.addEventListener('pointercancel', onEnd, { once: true });

        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onEnd);
            window.removeEventListener('pointercancel', onEnd);
        };
    }, [drag, slots, tileW, tileH]);

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                window.clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.wrapper}>
            <main className={styles.app}>
                <section className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Piece Together: CU Divhacks</h1>
                        <div className={styles.sub}>Drag tiles around and complete the banner.</div>
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.button} type="button" onClick={() => resetAndShuffle()}>
                            Shuffle
                        </button>
                        <button
                            className={`${styles.button} ${styles.secondary}`}
                            type="button"
                            onClick={() => {
                                setMoves(0);
                                setMessage('Timer and move count reset.');
                                resetTimer();
                            }}
                        >
                            Reset Timer
                        </button>
                    </div>
                </section>

                <section className={styles.stats}>
                    <div className={styles.pill}>Moves: {moves}</div>
                    <div className={styles.pill}>Time: {timeText}</div>
                </section>

                <h2 className={styles.zoneTitle}>Puzzle Board</h2>
                <div ref={boardRef} className={styles.stage}>
                    <canvas id="puzzle-grid" className={styles.gridLines} />
                    {pieces.map((piece) => {
                        const slot = slots[piece.slotIndex] ?? { x: 0, y: 0 };
                        const isDragging = drag?.pieceId === piece.id;
                        const left = isDragging ? drag.left : slot.x;
                        const top = isDragging ? drag.top : slot.y;

                        return (
                            <div
                                key={piece.id}
                                className={`${styles.tile} ${isDragging ? styles.dragging : ''}`}
                                style={{
                                    width: `${tileW}px`,
                                    height: `${tileH}px`,
                                    left: `${left}px`,
                                    top: `${top}px`,
                                }}
                                onPointerDown={(e) => {
                                    if (gameWon) return;
                                    startTimerIfNeeded();
                                    const tileRect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                                    const boardRect = boardRef.current?.getBoundingClientRect();
                                    if (!boardRect) return;

                                    setDrag({
                                        pieceId: piece.id,
                                        fromSlotIndex: piece.slotIndex,
                                        offsetX: e.clientX - tileRect.left,
                                        offsetY: e.clientY - tileRect.top,
                                        left: tileRect.left - boardRect.left,
                                        top: tileRect.top - boardRect.top,
                                    });
                                }}
                            >
                                <img src={piece.image} alt="Puzzle tile" draggable={false} />
                            </div>
                        );
                    })}
                </div>

                <p className={styles.message}>{message}</p>
            </main>
        </section>
    );
};

export default PuzzleGame;
