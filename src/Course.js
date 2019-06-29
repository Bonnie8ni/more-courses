import React, { Component } from 'react';
import styles from './Course.module.scss';

class Course extends Component {
    render() {
        const { title, cover } = this.props;
        return (
            <div className={styles.course}>
                <img
                    alt="course-img"
                    className={styles.cover}
                    src={cover}
                    style={{
                        backgroundImage: `url('${cover}')`,
                    }}
                />
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        );
    }
}

export default Course;