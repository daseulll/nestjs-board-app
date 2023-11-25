import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
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
    const board = this.boardService.getBoardById(id);
    if (!board) {
      return {};
    }
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
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
