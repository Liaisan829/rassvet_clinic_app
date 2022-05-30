import styles from "/styles/pagesStyles/error.module.scss";

function Error({statusCode}: any) {
    return (
        <div className={styles.error}>
            <h1>
                {statusCode !== 404
                    ? `An error ${statusCode} occurred on server`
                    : 'Произошла ошибка! Такой страницы нет'}
            </h1>
            <a href="/"><h3>Перейти на главную страницу</h3></a>
        </div>
    )
}

Error.getInitialProps = ({res, err}: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error