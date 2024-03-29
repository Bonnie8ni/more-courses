import React, { Component } from 'react';
import Course from './Course';
import styles from './App.module.scss';

const api = 'https://api.hiskio.com/v1/courses?profession_id=1';

class App extends Component {
    state = {
        courses: [],
        next: null,
        loading: true,
    }

    componentDidMount() {
        this.fetchData(api);
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const { next, loading } = this.state;
        if(loading) return;
        if(!next) return;
        if (
            window.scrollY + window.innerHeight >=
            document.body.scrollHeight - 100
        ) {
            this.fetchData(next);
        }
    }

    fetchData = (url) => {
        this.setState({
            loading: true,
        })

        fetch(url)
            .then((rs) => rs.json())
            .then((data) => {
                this.setState({
                    loading: false,
                    courses: [...this.state.courses, ...data.data],
                    next: data.links.next,
                });
            });
    }

    render() {
        const { courses } = this.state;
        return (
            <div className={styles['course-list']}>
                {
                    courses.map((course) => (
                        <Course key={course.id} {...course} />
                    ))
                }
            </div>
        );
    }
}

export default App;