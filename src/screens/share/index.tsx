import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Alert, Button, TextInput, View } from 'react-native';

import styled from 'styled-components/native';
import RadioButton from '@/components/Radio/RadioButton';
import RadioGroup from '@/components/Radio/RadioGroup';
import Text from '@/components/Text';

function ShareScreen() {
  const { params } = useRoute();
  const methods = useForm();
  const navigation = useNavigation();
  const { control, handleSubmit, setValue, getValues } = methods;

  const { sharedData } = params || {};

  const onChangeSelectedFolders = useCallback((newFolder: string) => {
    const selectedFolders: string[] = getValues('group') || [];
    const isRemove = selectedFolders.includes(newFolder);

    if (isRemove) {
      const newSelectedFolders = selectedFolders.filter(
        (selectedFolder) => selectedFolder !== newFolder
      );
      setValue('group', newSelectedFolders);
      return;
    }

    setValue('group', [...selectedFolders, newFolder]);
  }, []);

  const onSubmit = useCallback(
    (data) => {
      Alert.alert('data', JSON.stringify(data));
      navigation.reset({
        index: 0,
        routes: [{ name: '/home' }],
      });
    },
    [navigation]
  );

  return (
    <FormProvider {...methods}>
      <Styled.Container>
        <Controller
          name="url"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>URL</Text>
              <TextInput
                style={{ backgroundColor: 'red' }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={sharedData ? sharedData : value}
              />
            </View>
          )}
        />
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>제목</Text>
              <TextInput
                style={{ backgroundColor: 'red' }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </View>
          )}
        />
        <Controller
          name="tag"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text>태그</Text>
              <TextInput
                style={{ backgroundColor: 'red' }}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </View>
          )}
        />
        <View>
          <Text>그룹</Text>
          <RadioGroup onChange={onChangeSelectedFolders} control={control}>
            <RadioButton value="폴더 1" />
            <RadioButton value="폴더 2" />
            <RadioButton value="폴더 3" />
            <RadioButton value="폴더 4" />
          </RadioGroup>
        </View>
        <Button
          title="제출"
          onPress={handleSubmit(onSubmit, (error) => {
            console.log('error', error);
          })}
        />
      </Styled.Container>
    </FormProvider>
  );
}

export default ShareScreen;

const Styled = {
  Container: styled.ScrollView`
    padding-horizontal: 16px;
  `,
};
