import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards = new Map<string, Board>();

  getAllBoards() {
    return Array.from(this.boards.values());
  }

  getBoardById(id: string) {
    const board = this.boards.get(id);
    if (!board) {
      throw new NotFoundException(`Can' find board with id: ${id}`);
    }
    return board;
  }

  createBoard(createBoard: CreateBoardDto) {
    const board: Board = {
      id: uuid(),
      title: createBoard.title,
      description: createBoard.description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.set(board.id, board);
    return board;
  }

  updateBoardStatus(id: string, status: BoardStatus) {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  deleteBoardById(id: string): boolean {
    const board = this.getBoardById(id);
    return this.boards.delete(board.id);
  }
}
