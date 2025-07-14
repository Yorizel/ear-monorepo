// Event tracking and usage billing

export interface UsageEvent {
  id: string;
  userId: string;
  type: string;
  amount: number;
  timestamp: number;
}

export class UsageStore {
  private events: UsageEvent[] = [];

  addEvent(event: UsageEvent) {
    this.events.push(event);
  }

  getEventsForUser(userId: string): UsageEvent[] {
    return this.events.filter((e) => e.userId === userId);
  }

  getTotalUsage(userId: string): number {
    return this.getEventsForUser(userId).reduce((sum, e) => sum + e.amount, 0);
  }
}
