
enum ShirtSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
};

const getShirtSize = (shirtSize: ShirtSize) => {
    switch (shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
    }
};

const price = getShirtSize(ShirtSize.Small);