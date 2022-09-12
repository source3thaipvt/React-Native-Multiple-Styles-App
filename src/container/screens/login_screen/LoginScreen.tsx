import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageView from '../../component/PageView'
import images from '../../../res/images'
import sizes from '../../../res/sizes'
import TextViewBase from '../../../components/TextViewBase'
import strings from '../../../res/strings'
import ModalBase from '../../../components/ModalBase'
import colors from '../../../res/colors'
import CountryFlag from "react-native-country-flag";
import UtilsStorage from '../../../utils/UtilsStorage'
import InputBase from '../../../components/InputBase'
import { showToastOver } from '../../../utils/Utils'
import NavigationService from '../base/NavigationService'
import { ScreenName } from '../base/AppContainer'

export enum TypeLanguage {
    VI = 'vi',
    EN = 'en',
    JP = 'jp',
}
export enum TypeLogin {
    FACEBOOK = 'FACEBOOK',
    GMAIL = 'GMAIL',
    LOGIN = 'LOGIN',
}
const LoginScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [textLanguage, setTextLanguage] = useState<TypeLanguage>(TypeLanguage.VI);
    useEffect(() => {
        getLanguage();
    }, [])
    const getLanguage = async () => {
        const language = await UtilsStorage.get('language');
        setTextLanguage(language)
    }
    const onChangedLanguage = async (language: TypeLanguage) => {
        setIsVisible(false);
        setTextLanguage(language)
        strings.setLanguage(language)
        await UtilsStorage.set('language', language)
    }
    const loginWith = async (type: TypeLogin) => {
        switch (type) {
            case TypeLogin.LOGIN:
                NavigationService.reset(ScreenName.MULTIPLESTYLESAPP)
                break;
            case TypeLogin.FACEBOOK:
                showToastOver('Đăng nhập với facebook', 300)
                break;
            case TypeLogin.GMAIL:
                showToastOver('Đăng nhập với gmail', 300)
                break;

            default:
                break;
        }
    }
    return (
        <PageView imageBackgroud={images.bg_image} colorBackgroud={colors._color_pink_tranparent_5}>
            <View style={styles.header}>
                <TextViewBase title={strings.login} style={styles.txt_title_header} />
                <TouchableOpacity
                    onPress={() => {
                        setIsVisible(true)
                    }}
                    style={styles.btn_selected_language}>
                    <TextViewBase title={textLanguage} style={{ fontWeight: '700' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <InputBase
                    type='NORMAL'
                    initValue=''
                    placeholder={strings.username_placeholder}
                    onChangeText={(value: any, isValid: any) => {
                        console.log('eeeeee', value, isValid);
                    }}
                    style={{ marginTop: sizes._88sdp }}
                />
                <InputBase
                    secureTextEntry
                    type='NORMAL'
                    initValue=''
                    placeholder={strings.password_placeholder}
                    onChangeText={(value: any, isValid: any) => {
                        console.log('eeeeee', value, isValid);
                    }}
                    style={{ marginTop: sizes._28sdp }}
                />
                <TouchableOpacity
                    onPress={() => loginWith(TypeLogin.LOGIN)}
                    style={[styles.btn_login, { backgroundColor: 'rgba(118,224,118,1)' }]}>
                    <TextViewBase title={strings.login} style={styles.txt_btn_login} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => loginWith(TypeLogin.GMAIL)}
                    style={[styles.btn_login, { backgroundColor: 'rgba(221,247,221,1)' }]}>
                    <TextViewBase title={strings.login_gmail} style={[styles.txt_btn_login, { color: colors._color_black_tranparent_3 }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => loginWith(TypeLogin.FACEBOOK)}
                    style={[styles.btn_login, { backgroundColor: 'rgba(83,108,228,1)' }]}>
                    <TextViewBase title={strings.login_fb} style={styles.txt_btn_login} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                    <TextViewBase title={'Development by thaipvt'} style={{ textAlign: 'center', marginBottom: sizes._15sdp }} />
                </View>
            </View>
            <ModalBase isVisible={isVisible}>
                <View style={styles.container_modal}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsVisible(false)
                        }}
                        style={styles.btn_modal_cancel}>
                        <TextViewBase title={'X'} style={{ fontWeight: '600' }} />
                    </TouchableOpacity>
                    <TextViewBase title={strings.notification_language}
                        style={{ fontSize: sizes._18sdp, fontWeight: '700', textAlign: 'center', marginVertical: sizes._15sdp }} />
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => onChangedLanguage(TypeLanguage.VI)}
                            style={[styles.btn_select_language, { borderBottomWidth: sizes._1sdp, borderColor: '#999999' }]}>
                            <View style={{ marginLeft: sizes._20sdp, marginVertical: sizes._5sdp }}>
                                <CountryFlag isoCode="vn" size={25} />
                            </View>
                            <TextViewBase title={strings.language_vi} style={styles.txt_language} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onChangedLanguage(TypeLanguage.EN)}
                            style={[styles.btn_select_language, { borderBottomWidth: sizes._1sdp, borderColor: '#999999' }]}>
                            <View style={{ marginLeft: sizes._20sdp, marginVertical: sizes._5sdp }}>
                                <CountryFlag isoCode="gb" size={25} />
                            </View>
                            <TextViewBase title={strings.language_en} style={styles.txt_language} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onChangedLanguage(TypeLanguage.JP)}
                            style={styles.btn_select_language}>
                            <View style={{ marginLeft: sizes._20sdp, marginVertical: sizes._5sdp }}>
                                <CountryFlag isoCode="jp" size={25} />
                            </View>
                            <TextViewBase title={strings.language_jp} style={styles.txt_language} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalBase>
        </PageView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: sizes._30sdp,
        alignItems: 'center',
        flexDirection: 'row'
    },
    content: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderTopLeftRadius: sizes._45sdp,
        borderTopRightRadius: sizes._45sdp,
        paddingHorizontal: sizes._20sdp,
        flex: 1
        // height: sizes._screen_height - sizes._60sdp - sizes._statusbar_height
    },
    txt_title_header: {
        fontSize: sizes._20sdp,
        fontWeight: '700',
        letterSpacing: sizes._5sdp,
        textAlign: 'center', flex: 1
    },
    btn_selected_language: {
        position: 'absolute',
        right: sizes._30sdp,
        borderRadius: sizes._3sdp,
        borderWidth: sizes._1sdp,
        width: sizes._30sdp,
        height: sizes._30sdp,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors._color_white
    },
    container_modal: {
        backgroundColor: colors._color_white,
        height: sizes._screen_height * 0.3,
        borderRadius: sizes._5sdp
    },
    btn_modal_cancel: {
        width: sizes._30sdp,
        height: sizes._30sdp,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors._color_black_tranparent_7,
        borderRadius: sizes._90sdp,
        position: 'absolute',
        right: sizes._10sdp,
        top: sizes._10sdp
    },
    btn_select_language: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: sizes._10sdp
    },
    txt_language: {
        flex: 1,
        fontSize: sizes._18sdp,
        fontWeight: '500',
        marginLeft: sizes._20sdp
    },
    btn_login: {
        width: '100%',
        marginTop: sizes._30sdp,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes._8sdp,
        paddingVertical: sizes._12sdp
    },
    txt_btn_login: {
        fontSize: sizes._20sdp,
        fontWeight: '700',
        letterSpacing: sizes._3sdp,
        color: colors._text_white
    }

})