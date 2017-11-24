import * as autobahn from 'autobahn';
import * as When from 'when';
import * as sjcl from 'sjcl';

declare var when: any;

export class WampService {
    
}

interface IWampConnectionCallback { (session: autobahn.Session): void };
interface IWampConnectionFailureCallback { (reason: string, details: any) };