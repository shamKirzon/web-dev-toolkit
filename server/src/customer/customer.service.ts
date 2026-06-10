class CustomerService {
  async login() {}

  async getCustomerCountsByPeriod(period: number) {
    // TODO: replace with a real Prisma query once the database is wired up
    return period * 10;
  }
}

export const customerService = new CustomerService();
