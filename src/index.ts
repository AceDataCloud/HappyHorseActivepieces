import { createPiece } from '@activepieces/pieces-framework';
import { generate, getTask } from './lib/actions';
import { pieceAuth } from './lib/auth';
export const piece = createPiece({displayName:'HappyHorse by Ace Data Cloud',description:'Create HappyHorse video through Ace Data Cloud and retrieve the same task. Independent Ace integration.',logoUrl:'https://cdn.acedata.cloud/assets/logo.png',authors:['Ace Data Cloud'],minimumSupportedRelease:'0.92.2',auth:pieceAuth,actions:[generate,getTask],triggers:[]});
