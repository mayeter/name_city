export interface ISession {
    id: string,
    finished: boolean,
    rounds: IRound[] | null,
}

export interface IRound {
    letter: string,
    user1answers: IAnswers,
    user2answers: IAnswers,
}

export interface IAnswers {

}