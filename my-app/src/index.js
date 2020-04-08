/*******************************************************************************
 Copyright (c) 2020 Alex Meddin
 This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

 Alex Meddin github.com/ameddin73 ameddin73@gmail.com
 ******************************************************************************/

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

class Square extends React.Component {
    render() {
        return (
            <button className="square">
            {/* TODO */}
            </button>
    );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
    </div>
        <div className="board-row">
            {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
        <div className="board-row">
            {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>
        </div>
    );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
    );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
