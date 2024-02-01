import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
    const result = zxcvbn(password);
    const strength = result.score;

    const getColor = () => {
        switch (strength) {
            case 0:
                return '#ff0000';
            case 1:
                return '#ff4500';
            case 2:
                return '#ffa500';
            case 3:
                return '#32cd32';
            case 4:
                return '#008000';
            default:
                return '#808080';
        }
    };

    const getLabel = () => {
        switch (strength) {
            case 0:
                return 'Bardzo słabe';
            case 1:
                return 'Słabe';
            case 2:
                return 'Średnie';
            case 3:
                return 'Dobre';
            case 4:
                return 'Silne';
            default:
                return '';
        }
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <div
                style={{
                    height: '10px',
                    width: '100%',
                    backgroundColor: getColor(),
                    borderRadius: '5px',
                    margin: '5px 0',
                }}
            />
            <div style={{ textAlign: 'center', color: getColor() }}>{getLabel()}</div>
        </div>
    );
};

export default PasswordStrengthMeter;
