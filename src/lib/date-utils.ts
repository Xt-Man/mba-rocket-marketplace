import { parseISO } from 'date-fns'

export class DateUtils {
  static getDayFromStringDateISO(value: string): number {
    // value example: 2024-09-12T03:00:00.000Z
    const date = parseISO(value)
    return date.getDate()
  }
}
