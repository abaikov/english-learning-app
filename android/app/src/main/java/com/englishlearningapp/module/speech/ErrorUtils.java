package com.englishlearningapp.module.speech;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public class ErrorUtils {
    static WritableMap getError(String key, String errorMessage) {
        WritableMap errorMap = Arguments.createMap();
        errorMap.putString("message", errorMessage);
        if (key != null) {
            errorMap.putString("key", key);
        }
        return errorMap;
    }
}
