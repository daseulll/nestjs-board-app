import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
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

  updateBoardStatus(id: string, updateBoardStatus: UpdateBoardDto) {
    const { status } = updateBoardStatus;
    const board = this.getBoardById(id);
    board.status = status;
  }

  deleteBoardById(id: string): boolean {
    const board = this.getBoardById(id);

    if (!board) {
      console.log('raiss');
      throw new NotFoundException(`Can' find board with id: ${id}`);
    }
    return this.boards.delete(board.id);
  }
}
