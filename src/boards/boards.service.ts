import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  deleteBoardById(id: string): void {
    this.boards.delete(id);
  }
  private boards = new Map<string, Board>();

  getAllBoards() {
    return Array.from(this.boards.values());
  }

  getBoardById(boardId: string) {
    return this.boards.get(boardId);
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
}
