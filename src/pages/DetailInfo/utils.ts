/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { Users } from '../../utils'

export const getUser = (value: number) => {
  switch (value) {
    case Users.ADMIN:
      return 'Администратор'
    case Users.CUSTOMER:
      return 'Заказчик'
    default:
      return 'Заказчик'
  }
}
