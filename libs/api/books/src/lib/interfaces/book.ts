import { Book } from '@bookapp/shared/interfaces';
import { Document } from 'mongoose';

export interface BookModel extends Book, Document {
  _id: any;
}
