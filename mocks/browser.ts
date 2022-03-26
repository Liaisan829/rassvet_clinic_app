import { setupWorker } from 'msw'
import { handlers } from './handlers'
import {signInHandler} from "../pages/api/signIn";

export const worker = setupWorker(...handlers, signInHandler)