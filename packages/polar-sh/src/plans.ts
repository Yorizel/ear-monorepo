// Plan definitions and logic

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  usageLimit?: number;
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    features: ["Basic access"],
    usageLimit: 1000,
  },
  {
    id: "pro",
    name: "Pro",
    price: 20,
    features: ["Priority support", "Advanced features"],
    usageLimit: 10000,
  },
];

export function getPlanById(id: string): Plan | undefined {
  return plans.find((plan) => plan.id === id);
}
