import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    cardDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    cardIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cardTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    description: Schema.Attribute.String;
    headingboldtype: Schema.Attribute.JSON;
    headingtext: Schema.Attribute.String;
    Texttype: Schema.Attribute.Enumeration<
      ['Regular text', 'Bold text', 'Link text']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'heading.heading': HeadingHeading;
    }
  }
}
