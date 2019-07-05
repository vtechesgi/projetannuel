export interface Tchat {
  idMatch ?: number;
  viewers?: [
      {
          id?: string,
          username?: string,
          message?: string
          number?: number,
          like?: [
            {
              id?: string
            }
          ]
      }
  ];
  like ?: {
      awayTeam?: {
          number?: number,
          user ?: [
              {
                  id ?: string
              }
          ],
      },
      homeTeam?: {
          number?: number,
          user ?: [
              {
                  id?: string
              }
          ],
      }
  };
}
