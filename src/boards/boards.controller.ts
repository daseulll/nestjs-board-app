import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

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

  @Patch('/:id')
  updateBoard(@Param('id') id: string, @Body() dto: UpdateBoardDto) {
    return this.boardService.updateBoardStatus(id, dto);
  }

  @Delete()
  deleteBoardById(@Param('id') id: string) {
    return this.boardService.deleteBoardById(id);
  }
}
