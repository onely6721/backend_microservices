import { BaseInterfaceRepository } from '@app/shared';

import { MessageEntity } from '../entities/message.entity';

export type MessagesRepositoryInterface =
  BaseInterfaceRepository<MessageEntity>;
