import BaseTheme from '../../base/ui/components/BaseTheme.native';

const SECONDARY_COLOR = BaseTheme.palette.border04;
const btn = {
    marginTop: BaseTheme.spacing[4]
};
const btnText = {
    ...BaseTheme.typography.labelButtonLarge,
    color: BaseTheme.palette.text01,
    lineHeight: 30
};

export default {
    button: {
        alignItems: 'center',
        borderRadius: BaseTheme.shape.borderRadius,
        padding: BaseTheme.spacing[2],
        height: BaseTheme.spacing[7]
    },

    primaryButton: {
        ...btn,
        backgroundColor: BaseTheme.palette.action01
    },

    primaryButtonDisabled: {
        backgroundColor: BaseTheme.palette.action03Disabled,
        marginTop: BaseTheme.spacing[4]
    },

    primaryButtonText: {
        ...btnText
    },

    secondaryButton: {
        ...btn,
        backgroundColor: BaseTheme.palette.action02
    },


    secondaryButtonText: {
        ...btnText
    },

    buttonStylesBorderless: {
        iconStyle: {
            color: BaseTheme.palette.icon01,
            fontSize: 24
        },
        style: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: BaseTheme.spacing[3],
            height: 24,
            width: 24
        },
        underlayColor: 'transparent'
    },

    contentWrapper: {
        flex: 1
    },

    contentWrapperWide: {
        flex: 1,
        flexDirection: 'row'
    },

    largeVideoContainer: {
        minHeight: '50%'
    },

    largeVideoContainerWide: {
        height: '100%',
        marginRight: 'auto',
        position: 'absolute',
        width: '50%'
    },

    contentContainer: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '50%',
        paddingHorizontal: BaseTheme.spacing[3],
        width: 400
    },

    contentContainerWide: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        left: '50%',
        paddingHorizontal: BaseTheme.spacing[3],
        position: 'absolute',
        width: '50%'
    },

    toolboxContainer: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: BaseTheme.spacing[4]
    },

    toolboxContainerWide: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: BaseTheme.spacing[4]
    },

    formWrapper: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginHorizontal: BaseTheme.spacing[3]
    },

    field: {
        backgroundColor: BaseTheme.palette.field02,
        borderColor: SECONDARY_COLOR,
        borderRadius: BaseTheme.shape.borderRadius,
        borderWidth: 2,
        color: BaseTheme.palette.text06,
        height: BaseTheme.spacing[7],
        marginTop: BaseTheme.spacing[3],
        textAlign: 'center'
    }
};
