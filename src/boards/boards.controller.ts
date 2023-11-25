import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.createBoard(dto);
  }
}
