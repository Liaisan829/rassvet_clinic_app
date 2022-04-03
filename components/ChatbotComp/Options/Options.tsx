import styles from './Options.module.scss';

const Options = (props:any) => {
    const options = [
        {
            text: "Часы работы",
            handler: props.actionProvider.handleWorkingHours,
            id: 1,
        },
        {
            text: "Профиль",
            handler: props.actionProvider.handleProfile,
            id: 2
        },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className={styles.optionButton}>
            {option.text}
        </button>
    ));

    return <div className={styles.optionsContainer}>{buttonsMarkup}</div>;
};

export default Options;