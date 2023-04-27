import React from 'react';
import {Image, ScrollView} from 'react-native';
import {Card} from '../../molecules/Card';
import {SectionHeader} from '../../atoms/SectionHeader';
import {useStyle} from '../../../hooks/useStyle';
import {transactionDetailStyles} from './styles';
import {Badge} from '../../atoms/Badge';
import {Text} from '../../atoms/Text';
import {Button} from '../../atoms/Button';
import {useTheme} from '../../../hooks/useTheme';
import {Spacer} from '../../atoms/Spacer';

export function TransactionDetail() {
  const styles = useStyle(transactionDetailStyles);
  const {colors, spaces} = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
        }}
      />
      <Spacer height={spaces[8]} />
      <Badge color="#9C44DC" text="Alimentação" />
      <Spacer height={spaces[4]} />
      <Text style={styles.title}>Burguer King</Text>
      <Text style={styles.subTitle}>Sexta feira, 27 de novembro 2022</Text>
      <Spacer height={spaces[4]} />
      <Text style={[styles.value, {color: colors.negative300}]}>-R$ 89,90</Text>
      <Spacer height={spaces[4]} />
      <Card title="Nubank" hexColor="#9C44DC" type="Conta corrente" />

      <SectionHeader title="Localização" />

      <SectionHeader title="Notas" />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in,
        dolorem sit, excepturi suscipit nostrum culpa eveniet iure atque quasi
        porro reiciendis totam quis, eum illum possimus dolore voluptatum
        repudiandae?
      </Text>
      <Button title="Deletar transação" color={colors.negative500} />
    </ScrollView>
  );
}
