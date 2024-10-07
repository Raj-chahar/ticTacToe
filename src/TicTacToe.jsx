import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
const cross = require('../assets/1.png');
const circle = require('../assets/2.png');
export default function TicTacToe() {
    const intialData = ['', '', '', '', '', '', '', '', ''];
    const [data, setData] = useState(intialData); // for data entry
    const [count, setCount] = useState(0); // for tracking turns
    const [lock, setLock] = useState(false); // locking game after win or draw
    const [winner, setWinner] = useState(''); // for winner declaration
    const reset = () => {
        setData(intialData); // for resetting board
        setCount(0); // for resetting turn
        setLock(false); // for resetting board lock
        setWinner(''); // for resetting winner
    };
    const won = (player) => {
        setWinner(player === 'Draw' ? 'Draw!' : `Player ${player} Wins!`);
        setLock(true);
    };
    const toggle = (index) => {
        if (lock || data[index]) {
            return;
        }
        let newData = [...data];
        if(count % 2 === 0){
            newData[index] = 'X';
        }
        else{
            newData[index] = 'O';
        }
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    };
    const checkWin = (newData) => {
        if (newData[0] === newData[1] && newData[1] === newData[2] && newData[0] !== '') {
            won(newData[0]);
        } else if (newData[3] === newData[4] && newData[4] === newData[5] && newData[3] !== '') {
            won(newData[3]);
        } else if (newData[6] === newData[7] && newData[7] === newData[8] && newData[6] !== '') {
            won(newData[6]);
        } else if (newData[0] === newData[3] && newData[3] === newData[6] && newData[0] !== '') {
            won(newData[0]);
        } else if (newData[1] === newData[4] && newData[4] === newData[7] && newData[1] !== '') {
            won(newData[1]);
        } else if (newData[2] === newData[5] && newData[5] === newData[8] && newData[2] !== '') {
            won(newData[2]);
        } else if (newData[0] === newData[4] && newData[4] === newData[8] && newData[0] !== '') {
            won(newData[0]);
        } else if (newData[2] === newData[4] && newData[4] === newData[6] && newData[2] !== '') {
            won(newData[2]);
        } else if (!newData.includes('')) {
            won('Draw');
        }
    };
    return (
        <View>
            <Text style={styles.text}>Let's Play X O</Text>
            <View style={styles.board}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(0)}>
                        {data[0] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[0] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(1)}>
                        {data[1] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[1] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(2)}>
                        {data[2] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[2] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(3)}>
                        {data[3] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[3] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(4)}>
                        {data[4] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[4] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(5)}>
                        {data[5] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[5] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(6)}>
                        {data[6] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[6] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(7)}>
                        {data[7] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[7] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => toggle(8)}>
                        {data[8] === 'X' && <Image source={cross} style={styles.image} />}
                        {data[8] === 'O' && <Image source={circle} style={styles.image} />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnGrid}>
                <Pressable style={styles.reset} onPress={reset}>
                    <Text style={styles.resetBtnTxt}>Reset</Text>
                </Pressable>
            </View>
            {/* Winner declaration here */}
            <Text style={styles.winnerText}>{winner}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
    },
    board: {
        width: 360,
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#1f3540',
        borderColor: '#0f1b21',
        borderWidth: 4,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
    },
    btnGrid: {
        marginTop: 20,
        alignItems: 'center',
    },
    reset: {
        width: 150,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FF6F61',
    },
    resetBtnTxt: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    winnerText: {
        fontSize: 24,
        color: '#FFFFFF',
        marginTop: 20,
        textAlign: 'center',
    },
});
// const toggle = (index) => {
    //     if (lock || data[index]) {
    //         return;
    //     }
    //     let newData = [...data];
    //     if(count % 2 === 0){
    //         newData[index] = 'X';
    //     }
    //     else{
    //         newData[index] = 'O';
    //     }
    //     setData(newData);
    //     setCount(count + 1);
    //     checkWin();
    // };
    // const checkWin = () => {
    //     if (data[0] === data[1] && data[1] === data[2] && data[0] !== '') {
    //         won(data[0]);
    //     } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== '') {
    //         won(data[3]);
    //     } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== '') {
    //         won(data[6]);
    //     } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== '') {
    //         won(data[0]);
    //     } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== '') {
    //         won(data[1]);
    //     } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== '') {
    //         won(data[2]);
    //     } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== '') {
    //         won(data[0]);
    //     } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== '') {
    //         won(data[2]);
    //     }
    //     else if (!data.includes('')) {
    //         won('Draw');
    //     }
    // };
