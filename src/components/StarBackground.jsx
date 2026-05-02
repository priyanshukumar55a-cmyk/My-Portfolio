import { useEffect, useState } from "react";

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        createStars();
        createMeteors();

        const handleResize = () => {
            createStars();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const createStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.8 + 0.2,
                delay: Math.random() * 5,
                animationDuration: Math.random() * 5 + 5
            });
        }
        setStars(newStars);
    }

    const createMeteors = () => {
        const numberOfMeteors = 5;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                width: Math.random() * 50 + 50,
                height: Math.random() * 2 + 2,
                x: Math.random() * 100,
                y: Math.random() * 100,
                animationDuration: Math.random() * 2 + 2,
                animationDelay: Math.random() ,
            });
        }
        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        position: 'absolute',
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        position: 'absolute',
                        width: `${meteor.width}px`,
                        height: `${meteor.height}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                        animationDelay: `${meteor.animationDelay}s`,
                        opacity: 0
                    }}
                />
            ))}
        </div>
    )
}