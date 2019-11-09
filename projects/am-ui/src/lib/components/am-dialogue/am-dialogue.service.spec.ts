import { TestScheduler } from 'rxjs/testing';
import { AmDialogueService } from './am-dialogue.service';

describe('AmDialogueService', () => {
  let service: AmDialogueService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    service = new AmDialogueService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a success message', () => {
    const message = 'Do you wish to continue ?';
    const expectedMessage = { prefix: 'Success', message, color: 'green' };

    service.confirmDialog(message);
    scheduler.expectObservable(service.).toBe('a', { a: expectedMessage });
  });
