import { UserController } from '@ditojs/server'
import { User } from '@/models/user'

export class UsersController extends UserController {
  modelClass = User
}
