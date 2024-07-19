import {IAnswers} from "@/lib/types";

export default {
    async newGame() {
        const data = await fetch(`/api/sessions`, {method: "POST"});
        const response = await data.json();
        return { data: response.data, code: data.status };
    },
    async joinGame(sessionID: string) {
        const data = await fetch(`/api/sessions?id=${sessionID}`);
        const response = await data.json();
        return { data: response.data, code: data.status };
    },
    async revealAnswers(sessionID: string) {
        const data = await fetch(`/api/game_data?id=${sessionID}`);
        const response = await data.json();
        return { data: response.data, code: data.status };
    },
    async sendAnswers(sessionID: string, answers: IAnswers) {
        const data = await fetch(`/api/game_data?id=${sessionID}`, {method: "POST", body: JSON.stringify(answers)});
        const response = await data.json();
        return { data: response.data, code: data.status };
    },
};
