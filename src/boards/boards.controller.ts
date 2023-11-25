import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoardById(id);
  }

  @Post()
  createBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.createBoard(dto);
  }
}
