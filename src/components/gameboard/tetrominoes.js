export const TETROMINOS = {
    I: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    J: [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2]
    ],
    L: [
        [0, 0, 0],
        [3, 3, 3],
        [3, 0, 0]
    ],
    O: [
        [4, 4],
        [4, 4]
    ],
    S: [
        [0, 0, 0],
        [0, 5, 5],
        [5, 5, 0]
    ],
    T: [
        [0, 0, 0],
        [6, 6, 6],
        [0, 6, 0]
    ],
    Z: [
        [0, 0, 0],
        [7, 7, 0],
        [0, 7, 7]
    ],
}

export const TETROMINO_COLORS = {
    0: 'white', // Boş hücreler için renk
    1: 'cyan',   // I Tetromino
    2: 'blue',   // J Tetromino
    3: 'orange', // L Tetromino
    4: 'yellow', // O Tetromino
    5: 'green',  // S Tetromino
    6: 'purple', // T Tetromino
    7: 'red',    //
}

