export interface Repository {
  readonly todo: {
    readonly completed: boolean;
    readonly id: number;
    readonly title: string;
    readonly userId: number;
  };

  readonly album: {
    readonly userId: number;
    readonly id: number;
    readonly title: string;
  };

  readonly user: {
    readonly id: number;
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly address: {
      readonly street: string;
      readonly suite: string;
      readonly city: string;
      readonly zipcode: string;
      readonly geo: {
        readonly lat: `${number}`;
        readonly lng: `${number}`;
      };
    };
    readonly phone: string;
    readonly website: string;
    readonly company: {
      readonly name: string;
      readonly catchPhrase: string;
      readonly bs: string;
    };
  };

  readonly post: {
    readonly userId: number;
    readonly id: number;
    readonly title: string;
    readonly body: string;
  };
}
