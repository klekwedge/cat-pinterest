import ICat from "../../types";

export interface CatsState {
    cats: ICat[],
    favouriteCats: ICat[]
    catsLoadingStatus: 'idle' | 'loading' | 'error',
}
