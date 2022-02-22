import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
            <Film key={film.id} name={film.name} url={film.url}/>
        )
    })

    return (
        <>
            <h3>This is the film list</h3>
            <ul>{filmNodes}</ul>
        </>
    )
}

export default FilmList;