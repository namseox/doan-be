import { EDeviceOs } from '@libs/grpc-types/protos/device';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

import { UserModel } from './user.model';

@Table({
  modelName: 'device',
  tableName: 'devices',
  underscored: true,
})
export class DeviceModel extends BaseModel<DeviceModel> {
  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.INTEGER })
  os: EDeviceOs;

  @Column({ type: DataType.TEXT })
  deviceId: string;

  @Column({ type: DataType.TEXT })
  token: string;

  @BelongsTo(() => UserModel)
  user?: UserModel;
}
