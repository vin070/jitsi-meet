// @flow

import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { translate } from '../../../base/i18n';
import { Icon, IconClose } from '../../../base/icons';
import { ActionButton } from '../../../base/premeeting';
import Label from '../Label';
import CountryPicker from '../country-picker/CountryPicker';

type Props = {

    /**
     * Closes a dialog.
     */
    onClose: Function,

    /**
     * Submit handler.
     */
    onSubmit: Function,

    /**
     * Handler for text button.
     */
    onTextButtonClick: Function,

    /**
     * Used for translation.
     */
    t: Function,
};

const useStyles = makeStyles(theme => {
    return {
        dialOutDialog: {
            padding: `${theme.spacing(3)}px`
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: `${theme.spacing(4)}px`
        },
        picker: {
            margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px 0`
        }
    };
});

/**
 * This component displays the dialog from which the user can enter the
 * phone number in order to be called by the meeting.
 *
 * @param {Props} props - The props of the component.
 * @returns {React$Element}
 */
function DialOutDialog(props: Props) {
    const { onClose, onTextButtonClick, onSubmit, t } = props;
    const classes = useStyles();

    return (
        <div className = { classes.dialOutDialog }>
            <div className = { classes.header }>
                <div className = 'prejoin-dialog-title'>
                    {t('prejoin.startWithPhone')}
                </div>
                <Icon
                    className = 'prejoin-dialog-icon'
                    onClick = { onClose }
                    role = 'button'
                    size = { 24 }
                    src = { IconClose } />
            </div>
            <Label>{t('prejoin.callMeAtNumber')}</Label>
            <div className = { classes.picker }>
                <CountryPicker onSubmit = { onSubmit } />
            </div>
            <ActionButton
                className = 'prejoin-dialog-btn'
                onClick = { onSubmit }
                type = 'primary'>
                {t('prejoin.callMe')}
            </ActionButton>
            <div className = 'prejoin-dialog-delimiter-container'>
                <div className = 'prejoin-dialog-delimiter' />
                <div className = 'prejoin-dialog-delimiter-txt-container'>
                    <span className = 'prejoin-dialog-delimiter-txt'>
                        {t('prejoin.or')}
                    </span>
                </div>
            </div>
            <div className = 'prejoin-dialog-dialin-container'>
                <ActionButton
                    className = 'prejoin-dialog-btn'
                    onClick = { onTextButtonClick }
                    type = 'text'>
                    {t('prejoin.iWantToDialIn')}
                </ActionButton>
            </div>
        </div>
    );
}

export default translate(DialOutDialog);
