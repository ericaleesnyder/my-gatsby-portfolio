export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
}

export interface BooleanQueryOperatorInput {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
}

export interface DateQueryOperatorInput {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
}

export interface DatoCmsAsset extends Node {
  __typename?: 'DatoCmsAsset';
  author?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  children: Array<Node>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  copyright?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  filename?: Maybe<Scalars['String']>;
  fixed?: Maybe<DatoCmsFixed>;
  fluid?: Maybe<DatoCmsFluid>;
  format?: Maybe<Scalars['String']>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
  isImage?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  resolutions?: Maybe<DatoCmsFixed>;
  size?: Maybe<Scalars['Int']>;
  sizes?: Maybe<DatoCmsFluid>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  width?: Maybe<Scalars['Int']>;
}


export interface DatoCmsAssetCreatedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsAssetFixedArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsAssetFluidArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsAssetGatsbyImageDataArgs {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsAssetResolutionsArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsAssetSizesArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsAssetUrlArgs {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
}

export interface DatoCmsAssetConnection {
  __typename?: 'DatoCmsAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsAssetEdge>;
  group: Array<DatoCmsAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsAssetConnectionDistinctArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetConnectionGroupArgs {
  field: DatoCmsAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsAssetConnectionMaxArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetConnectionMinArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetConnectionSumArgs {
  field: DatoCmsAssetFieldSelector;
}

export interface DatoCmsAssetEdge {
  __typename?: 'DatoCmsAssetEdge';
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
}

export interface DatoCmsAssetFieldSelector {
  author?: InputMaybe<FieldSelectorEnum>;
  basename?: InputMaybe<FieldSelectorEnum>;
  blurhash?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  colors?: InputMaybe<DatoCmsColorFieldFieldSelector>;
  copyright?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  exifInfo?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  fixed?: InputMaybe<DatoCmsFixedFieldSelector>;
  fluid?: InputMaybe<DatoCmsFluidFieldSelector>;
  format?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isImage?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  notes?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  path?: InputMaybe<FieldSelectorEnum>;
  resolutions?: InputMaybe<DatoCmsFixedFieldSelector>;
  size?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<DatoCmsFluidFieldSelector>;
  smartTags?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  video?: InputMaybe<DatoCmsAssetVideoFieldSelector>;
  width?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsAssetFilterInput {
  author?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
}

export interface DatoCmsAssetGroupConnection {
  __typename?: 'DatoCmsAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsAssetGroupConnectionDistinctArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetGroupConnectionGroupArgs {
  field: DatoCmsAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsAssetGroupConnectionMaxArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetGroupConnectionMinArgs {
  field: DatoCmsAssetFieldSelector;
}


export interface DatoCmsAssetGroupConnectionSumArgs {
  field: DatoCmsAssetFieldSelector;
}

export interface DatoCmsAssetSortInput {
  author?: InputMaybe<SortOrderEnum>;
  basename?: InputMaybe<SortOrderEnum>;
  blurhash?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  colors?: InputMaybe<DatoCmsColorFieldSortInput>;
  copyright?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  exifInfo?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  fixed?: InputMaybe<DatoCmsFixedSortInput>;
  fluid?: InputMaybe<DatoCmsFluidSortInput>;
  format?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isImage?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  notes?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  path?: InputMaybe<SortOrderEnum>;
  resolutions?: InputMaybe<DatoCmsFixedSortInput>;
  size?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<DatoCmsFluidSortInput>;
  smartTags?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  video?: InputMaybe<DatoCmsAssetVideoSortInput>;
  width?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsAssetVideo {
  __typename?: 'DatoCmsAssetVideo';
  duration?: Maybe<Scalars['Int']>;
  frameRate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxPlaybackId?: Maybe<Scalars['String']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
}


export interface DatoCmsAssetVideoMp4UrlArgs {
  exactRes?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  res?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
}


export interface DatoCmsAssetVideoThumbnailUrlArgs {
  format?: InputMaybe<DatoCmsAssetVideoThumbnailFormat>;
}

export interface DatoCmsAssetVideoFieldSelector {
  duration?: InputMaybe<FieldSelectorEnum>;
  frameRate?: InputMaybe<FieldSelectorEnum>;
  mp4Url?: InputMaybe<FieldSelectorEnum>;
  muxPlaybackId?: InputMaybe<FieldSelectorEnum>;
  streamingUrl?: InputMaybe<FieldSelectorEnum>;
  thumbnailUrl?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsAssetVideoFilterInput {
  duration?: InputMaybe<IntQueryOperatorInput>;
  frameRate?: InputMaybe<IntQueryOperatorInput>;
  mp4Url?: InputMaybe<StringQueryOperatorInput>;
  muxPlaybackId?: InputMaybe<StringQueryOperatorInput>;
  streamingUrl?: InputMaybe<StringQueryOperatorInput>;
  thumbnailUrl?: InputMaybe<StringQueryOperatorInput>;
}

export enum DatoCmsAssetVideoMp4ResolutionQuality {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export interface DatoCmsAssetVideoSortInput {
  duration?: InputMaybe<SortOrderEnum>;
  frameRate?: InputMaybe<SortOrderEnum>;
  mp4Url?: InputMaybe<SortOrderEnum>;
  muxPlaybackId?: InputMaybe<SortOrderEnum>;
  streamingUrl?: InputMaybe<SortOrderEnum>;
  thumbnailUrl?: InputMaybe<SortOrderEnum>;
}

export enum DatoCmsAssetVideoThumbnailFormat {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export interface DatoCmsColorField {
  __typename?: 'DatoCmsColorField';
  alpha?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
}

export interface DatoCmsColorFieldFieldSelector {
  alpha?: InputMaybe<FieldSelectorEnum>;
  blue?: InputMaybe<FieldSelectorEnum>;
  green?: InputMaybe<FieldSelectorEnum>;
  hex?: InputMaybe<FieldSelectorEnum>;
  red?: InputMaybe<FieldSelectorEnum>;
  rgb?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsColorFieldFilterInput {
  alpha?: InputMaybe<IntQueryOperatorInput>;
  blue?: InputMaybe<IntQueryOperatorInput>;
  green?: InputMaybe<IntQueryOperatorInput>;
  hex?: InputMaybe<StringQueryOperatorInput>;
  red?: InputMaybe<IntQueryOperatorInput>;
  rgb?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsColorFieldFilterListInput {
  elemMatch?: InputMaybe<DatoCmsColorFieldFilterInput>;
}

export interface DatoCmsColorFieldSortInput {
  alpha?: InputMaybe<SortOrderEnum>;
  blue?: InputMaybe<SortOrderEnum>;
  green?: InputMaybe<SortOrderEnum>;
  hex?: InputMaybe<SortOrderEnum>;
  red?: InputMaybe<SortOrderEnum>;
  rgb?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsComponentCallToAction extends Node {
  __typename?: 'DatoCmsComponentCallToAction';
  buttonType?: Maybe<Scalars['String']>;
  children: Array<Node>;
  hoverColor?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  isDark?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  size?: Maybe<Scalars['String']>;
}

export interface DatoCmsComponentCallToActionConnection {
  __typename?: 'DatoCmsComponentCallToActionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentCallToActionEdge>;
  group: Array<DatoCmsComponentCallToActionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentCallToAction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentCallToActionConnectionDistinctArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionConnectionGroupArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentCallToActionConnectionMaxArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionConnectionMinArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionConnectionSumArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}

export interface DatoCmsComponentCallToActionEdge {
  __typename?: 'DatoCmsComponentCallToActionEdge';
  next?: Maybe<DatoCmsComponentCallToAction>;
  node: DatoCmsComponentCallToAction;
  previous?: Maybe<DatoCmsComponentCallToAction>;
}

export interface DatoCmsComponentCallToActionFieldSelector {
  buttonType?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  hoverColor?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  isDark?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  size?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsComponentCallToActionFilterInput {
  buttonType?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  hoverColor?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  isDark?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  size?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsComponentCallToActionFilterListInput {
  elemMatch?: InputMaybe<DatoCmsComponentCallToActionFilterInput>;
}

export interface DatoCmsComponentCallToActionGroupConnection {
  __typename?: 'DatoCmsComponentCallToActionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentCallToActionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentCallToActionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentCallToAction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentCallToActionGroupConnectionDistinctArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionGroupConnectionGroupArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentCallToActionGroupConnectionMaxArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionGroupConnectionMinArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}


export interface DatoCmsComponentCallToActionGroupConnectionSumArgs {
  field: DatoCmsComponentCallToActionFieldSelector;
}

export interface DatoCmsComponentCallToActionSortInput {
  buttonType?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  hoverColor?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  isDark?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  size?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsComponentHero extends Node {
  __typename?: 'DatoCmsComponentHero';
  body?: Maybe<DatoCmsDatoCmsComponentHeroBodyStructuredText>;
  children: Array<Node>;
  ctas?: Maybe<Array<Maybe<DatoCmsComponentCallToAction>>>;
  featuredImage?: Maybe<DatoCmsComponentImage>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  secondaryImage?: Maybe<DatoCmsComponentImage>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  subheading?: Maybe<Scalars['String']>;
  subheadingNode?: Maybe<DatoCmsTextNode>;
  tertiaryImage?: Maybe<DatoCmsComponentImage>;
}

export interface DatoCmsComponentHeroConnection {
  __typename?: 'DatoCmsComponentHeroConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentHeroEdge>;
  group: Array<DatoCmsComponentHeroGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentHero>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentHeroConnectionDistinctArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroConnectionGroupArgs {
  field: DatoCmsComponentHeroFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentHeroConnectionMaxArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroConnectionMinArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroConnectionSumArgs {
  field: DatoCmsComponentHeroFieldSelector;
}

export interface DatoCmsComponentHeroEdge {
  __typename?: 'DatoCmsComponentHeroEdge';
  next?: Maybe<DatoCmsComponentHero>;
  node: DatoCmsComponentHero;
  previous?: Maybe<DatoCmsComponentHero>;
}

export interface DatoCmsComponentHeroFieldSelector {
  body?: InputMaybe<DatoCmsDatoCmsComponentHeroBodyStructuredTextFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  ctas?: InputMaybe<DatoCmsComponentCallToActionFieldSelector>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFieldSelector>;
  heading?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  secondaryImage?: InputMaybe<DatoCmsComponentImageFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  subheading?: InputMaybe<FieldSelectorEnum>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  tertiaryImage?: InputMaybe<DatoCmsComponentImageFieldSelector>;
}

export interface DatoCmsComponentHeroFilterInput {
  body?: InputMaybe<DatoCmsDatoCmsComponentHeroBodyStructuredTextFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctas?: InputMaybe<DatoCmsComponentCallToActionFilterListInput>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  secondaryImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  tertiaryImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
}

export interface DatoCmsComponentHeroGroupConnection {
  __typename?: 'DatoCmsComponentHeroGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentHeroEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentHeroGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentHero>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentHeroGroupConnectionDistinctArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroGroupConnectionGroupArgs {
  field: DatoCmsComponentHeroFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentHeroGroupConnectionMaxArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroGroupConnectionMinArgs {
  field: DatoCmsComponentHeroFieldSelector;
}


export interface DatoCmsComponentHeroGroupConnectionSumArgs {
  field: DatoCmsComponentHeroFieldSelector;
}

export interface DatoCmsComponentHeroSortInput {
  body?: InputMaybe<DatoCmsDatoCmsComponentHeroBodyStructuredTextSortInput>;
  children?: InputMaybe<NodeSortInput>;
  ctas?: InputMaybe<DatoCmsComponentCallToActionSortInput>;
  featuredImage?: InputMaybe<DatoCmsComponentImageSortInput>;
  heading?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  secondaryImage?: InputMaybe<DatoCmsComponentImageSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  subheading?: InputMaybe<SortOrderEnum>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  tertiaryImage?: InputMaybe<DatoCmsComponentImageSortInput>;
}

export interface DatoCmsComponentImage extends Node {
  __typename?: 'DatoCmsComponentImage';
  alt?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  captionNode?: Maybe<DatoCmsTextNode>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  descriptionNode?: Maybe<DatoCmsTextNode>;
  desktopImage?: Maybe<DatoCmsFileField>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  mobileImage?: Maybe<DatoCmsFileField>;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  title?: Maybe<Scalars['String']>;
}

export interface DatoCmsComponentImageConnection {
  __typename?: 'DatoCmsComponentImageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentImageEdge>;
  group: Array<DatoCmsComponentImageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentImageConnectionDistinctArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageConnectionGroupArgs {
  field: DatoCmsComponentImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentImageConnectionMaxArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageConnectionMinArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageConnectionSumArgs {
  field: DatoCmsComponentImageFieldSelector;
}

export interface DatoCmsComponentImageEdge {
  __typename?: 'DatoCmsComponentImageEdge';
  next?: Maybe<DatoCmsComponentImage>;
  node: DatoCmsComponentImage;
  previous?: Maybe<DatoCmsComponentImage>;
}

export interface DatoCmsComponentImageFieldSelector {
  alt?: InputMaybe<FieldSelectorEnum>;
  caption?: InputMaybe<FieldSelectorEnum>;
  captionNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  desktopImage?: InputMaybe<DatoCmsFileFieldFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  mobileImage?: InputMaybe<DatoCmsFileFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsComponentImageFilterInput {
  alt?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  captionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  desktopImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  mobileImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsComponentImageFilterListInput {
  elemMatch?: InputMaybe<DatoCmsComponentImageFilterInput>;
}

export interface DatoCmsComponentImageGroupConnection {
  __typename?: 'DatoCmsComponentImageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentImageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentImageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentImageGroupConnectionDistinctArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageGroupConnectionGroupArgs {
  field: DatoCmsComponentImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentImageGroupConnectionMaxArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageGroupConnectionMinArgs {
  field: DatoCmsComponentImageFieldSelector;
}


export interface DatoCmsComponentImageGroupConnectionSumArgs {
  field: DatoCmsComponentImageFieldSelector;
}

export interface DatoCmsComponentImageSortInput {
  alt?: InputMaybe<SortOrderEnum>;
  caption?: InputMaybe<SortOrderEnum>;
  captionNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  desktopImage?: InputMaybe<DatoCmsFileFieldSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  mobileImage?: InputMaybe<DatoCmsFileFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  title?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsComponentSkillsBar extends Node {
  __typename?: 'DatoCmsComponentSkillsBar';
  children: Array<Node>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  skills?: Maybe<Array<Maybe<DatoCmsEntitySkill>>>;
}

export interface DatoCmsComponentSkillsBarConnection {
  __typename?: 'DatoCmsComponentSkillsBarConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentSkillsBarEdge>;
  group: Array<DatoCmsComponentSkillsBarGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentSkillsBar>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentSkillsBarConnectionDistinctArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarConnectionGroupArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentSkillsBarConnectionMaxArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarConnectionMinArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarConnectionSumArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}

export interface DatoCmsComponentSkillsBarEdge {
  __typename?: 'DatoCmsComponentSkillsBarEdge';
  next?: Maybe<DatoCmsComponentSkillsBar>;
  node: DatoCmsComponentSkillsBar;
  previous?: Maybe<DatoCmsComponentSkillsBar>;
}

export interface DatoCmsComponentSkillsBarFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  heading?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  skills?: InputMaybe<DatoCmsEntitySkillFieldSelector>;
}

export interface DatoCmsComponentSkillsBarFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  skills?: InputMaybe<DatoCmsEntitySkillFilterListInput>;
}

export interface DatoCmsComponentSkillsBarGroupConnection {
  __typename?: 'DatoCmsComponentSkillsBarGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentSkillsBarEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentSkillsBarGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentSkillsBar>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentSkillsBarGroupConnectionDistinctArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarGroupConnectionGroupArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentSkillsBarGroupConnectionMaxArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarGroupConnectionMinArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}


export interface DatoCmsComponentSkillsBarGroupConnectionSumArgs {
  field: DatoCmsComponentSkillsBarFieldSelector;
}

export interface DatoCmsComponentSkillsBarSortInput {
  children?: InputMaybe<NodeSortInput>;
  heading?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  skills?: InputMaybe<DatoCmsEntitySkillSortInput>;
}

export interface DatoCmsComponentStory extends Node {
  __typename?: 'DatoCmsComponentStory';
  children: Array<Node>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  subheading?: Maybe<Scalars['String']>;
  subheadingNode?: Maybe<DatoCmsTextNode>;
  timelineItems?: Maybe<Array<Maybe<DatoCmsTimelineInstance>>>;
}

export interface DatoCmsComponentStoryConnection {
  __typename?: 'DatoCmsComponentStoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentStoryEdge>;
  group: Array<DatoCmsComponentStoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentStory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentStoryConnectionDistinctArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryConnectionGroupArgs {
  field: DatoCmsComponentStoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentStoryConnectionMaxArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryConnectionMinArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryConnectionSumArgs {
  field: DatoCmsComponentStoryFieldSelector;
}

export interface DatoCmsComponentStoryEdge {
  __typename?: 'DatoCmsComponentStoryEdge';
  next?: Maybe<DatoCmsComponentStory>;
  node: DatoCmsComponentStory;
  previous?: Maybe<DatoCmsComponentStory>;
}

export interface DatoCmsComponentStoryFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  heading?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  subheading?: InputMaybe<FieldSelectorEnum>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  timelineItems?: InputMaybe<DatoCmsTimelineInstanceFieldSelector>;
}

export interface DatoCmsComponentStoryFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  timelineItems?: InputMaybe<DatoCmsTimelineInstanceFilterListInput>;
}

export interface DatoCmsComponentStoryGroupConnection {
  __typename?: 'DatoCmsComponentStoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentStoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentStoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentStory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentStoryGroupConnectionDistinctArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryGroupConnectionGroupArgs {
  field: DatoCmsComponentStoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentStoryGroupConnectionMaxArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryGroupConnectionMinArgs {
  field: DatoCmsComponentStoryFieldSelector;
}


export interface DatoCmsComponentStoryGroupConnectionSumArgs {
  field: DatoCmsComponentStoryFieldSelector;
}

export interface DatoCmsComponentStorySortInput {
  children?: InputMaybe<NodeSortInput>;
  heading?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  subheading?: InputMaybe<SortOrderEnum>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  timelineItems?: InputMaybe<DatoCmsTimelineInstanceSortInput>;
}

export interface DatoCmsComponentTestimonial extends Node {
  __typename?: 'DatoCmsComponentTestimonial';
  author?: Maybe<DatoCmsEntityPerson>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  quote?: Maybe<DatoCmsDatoCmsComponentTestimonialQuoteStructuredText>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
}

export interface DatoCmsComponentTestimonialCarousel extends Node {
  __typename?: 'DatoCmsComponentTestimonialCarousel';
  children: Array<Node>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  quotes?: Maybe<Array<Maybe<DatoCmsComponentTestimonial>>>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
}

export interface DatoCmsComponentTestimonialCarouselConnection {
  __typename?: 'DatoCmsComponentTestimonialCarouselConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentTestimonialCarouselEdge>;
  group: Array<DatoCmsComponentTestimonialCarouselGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentTestimonialCarousel>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentTestimonialCarouselConnectionDistinctArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselConnectionGroupArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentTestimonialCarouselConnectionMaxArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselConnectionMinArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselConnectionSumArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}

export interface DatoCmsComponentTestimonialCarouselEdge {
  __typename?: 'DatoCmsComponentTestimonialCarouselEdge';
  next?: Maybe<DatoCmsComponentTestimonialCarousel>;
  node: DatoCmsComponentTestimonialCarousel;
  previous?: Maybe<DatoCmsComponentTestimonialCarousel>;
}

export interface DatoCmsComponentTestimonialCarouselFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  heading?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  quotes?: InputMaybe<DatoCmsComponentTestimonialFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
}

export interface DatoCmsComponentTestimonialCarouselFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  quotes?: InputMaybe<DatoCmsComponentTestimonialFilterListInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}

export interface DatoCmsComponentTestimonialCarouselGroupConnection {
  __typename?: 'DatoCmsComponentTestimonialCarouselGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentTestimonialCarouselEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentTestimonialCarouselGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentTestimonialCarousel>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentTestimonialCarouselGroupConnectionDistinctArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselGroupConnectionGroupArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentTestimonialCarouselGroupConnectionMaxArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselGroupConnectionMinArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}


export interface DatoCmsComponentTestimonialCarouselGroupConnectionSumArgs {
  field: DatoCmsComponentTestimonialCarouselFieldSelector;
}

export interface DatoCmsComponentTestimonialCarouselSortInput {
  children?: InputMaybe<NodeSortInput>;
  heading?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  quotes?: InputMaybe<DatoCmsComponentTestimonialSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
}

export interface DatoCmsComponentTestimonialConnection {
  __typename?: 'DatoCmsComponentTestimonialConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentTestimonialEdge>;
  group: Array<DatoCmsComponentTestimonialGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentTestimonial>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentTestimonialConnectionDistinctArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialConnectionGroupArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentTestimonialConnectionMaxArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialConnectionMinArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialConnectionSumArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}

export interface DatoCmsComponentTestimonialEdge {
  __typename?: 'DatoCmsComponentTestimonialEdge';
  next?: Maybe<DatoCmsComponentTestimonial>;
  node: DatoCmsComponentTestimonial;
  previous?: Maybe<DatoCmsComponentTestimonial>;
}

export interface DatoCmsComponentTestimonialFieldSelector {
  author?: InputMaybe<DatoCmsEntityPersonFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  quote?: InputMaybe<DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
}

export interface DatoCmsComponentTestimonialFilterInput {
  author?: InputMaybe<DatoCmsEntityPersonFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  quote?: InputMaybe<DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}

export interface DatoCmsComponentTestimonialFilterListInput {
  elemMatch?: InputMaybe<DatoCmsComponentTestimonialFilterInput>;
}

export interface DatoCmsComponentTestimonialGroupConnection {
  __typename?: 'DatoCmsComponentTestimonialGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsComponentTestimonialEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsComponentTestimonialGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsComponentTestimonial>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsComponentTestimonialGroupConnectionDistinctArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialGroupConnectionGroupArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsComponentTestimonialGroupConnectionMaxArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialGroupConnectionMinArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}


export interface DatoCmsComponentTestimonialGroupConnectionSumArgs {
  field: DatoCmsComponentTestimonialFieldSelector;
}

export interface DatoCmsComponentTestimonialSortInput {
  author?: InputMaybe<DatoCmsEntityPersonSortInput>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  quote?: InputMaybe<DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
}

export interface DatoCmsDatoCmsComponentHeroBodyStructuredText {
  __typename?: 'DatoCmsDatoCmsComponentHeroBodyStructuredText';
  blocks?: Maybe<Array<Maybe<Scalars['String']>>>;
  links?: Maybe<Array<Maybe<DatoCmsComponentCallToAction>>>;
  value?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsDatoCmsComponentHeroBodyStructuredTextFieldSelector {
  blocks?: InputMaybe<FieldSelectorEnum>;
  links?: InputMaybe<DatoCmsComponentCallToActionFieldSelector>;
  value?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsDatoCmsComponentHeroBodyStructuredTextFilterInput {
  blocks?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<DatoCmsComponentCallToActionFilterListInput>;
  value?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsDatoCmsComponentHeroBodyStructuredTextSortInput {
  blocks?: InputMaybe<SortOrderEnum>;
  links?: InputMaybe<DatoCmsComponentCallToActionSortInput>;
  value?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsDatoCmsComponentTestimonialQuoteStructuredText {
  __typename?: 'DatoCmsDatoCmsComponentTestimonialQuoteStructuredText';
  blocks?: Maybe<Array<Maybe<Scalars['String']>>>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  value?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextFieldSelector {
  blocks?: InputMaybe<FieldSelectorEnum>;
  links?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextFilterInput {
  blocks?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextSortInput {
  blocks?: InputMaybe<SortOrderEnum>;
  links?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsDatoCmsTemplateProjectBodyStructuredText {
  __typename?: 'DatoCmsDatoCmsTemplateProjectBodyStructuredText';
  blocks?: Maybe<Array<Maybe<Scalars['String']>>>;
  links?: Maybe<Array<Maybe<DatoCmsComponentImage>>>;
  value?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsDatoCmsTemplateProjectBodyStructuredTextFieldSelector {
  blocks?: InputMaybe<FieldSelectorEnum>;
  links?: InputMaybe<DatoCmsComponentImageFieldSelector>;
  value?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsDatoCmsTemplateProjectBodyStructuredTextFilterInput {
  blocks?: InputMaybe<StringQueryOperatorInput>;
  links?: InputMaybe<DatoCmsComponentImageFilterListInput>;
  value?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsDatoCmsTemplateProjectBodyStructuredTextSortInput {
  blocks?: InputMaybe<SortOrderEnum>;
  links?: InputMaybe<DatoCmsComponentImageSortInput>;
  value?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsEntityPerson extends Node {
  __typename?: 'DatoCmsEntityPerson';
  children: Array<Node>;
  company?: Maybe<Scalars['String']>;
  headshot?: Maybe<DatoCmsFileField>;
  id: Scalars['ID'];
  internal: Internal;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  name?: Maybe<Scalars['String']>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  positionTitle?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
}

export interface DatoCmsEntityPersonConnection {
  __typename?: 'DatoCmsEntityPersonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsEntityPersonEdge>;
  group: Array<DatoCmsEntityPersonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsEntityPerson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsEntityPersonConnectionDistinctArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonConnectionGroupArgs {
  field: DatoCmsEntityPersonFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsEntityPersonConnectionMaxArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonConnectionMinArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonConnectionSumArgs {
  field: DatoCmsEntityPersonFieldSelector;
}

export interface DatoCmsEntityPersonEdge {
  __typename?: 'DatoCmsEntityPersonEdge';
  next?: Maybe<DatoCmsEntityPerson>;
  node: DatoCmsEntityPerson;
  previous?: Maybe<DatoCmsEntityPerson>;
}

export interface DatoCmsEntityPersonFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  company?: InputMaybe<FieldSelectorEnum>;
  headshot?: InputMaybe<DatoCmsFileFieldFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  positionTitle?: InputMaybe<FieldSelectorEnum>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
}

export interface DatoCmsEntityPersonFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  company?: InputMaybe<StringQueryOperatorInput>;
  headshot?: InputMaybe<DatoCmsFileFieldFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  positionTitle?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}

export interface DatoCmsEntityPersonGroupConnection {
  __typename?: 'DatoCmsEntityPersonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsEntityPersonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsEntityPersonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsEntityPerson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsEntityPersonGroupConnectionDistinctArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonGroupConnectionGroupArgs {
  field: DatoCmsEntityPersonFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsEntityPersonGroupConnectionMaxArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonGroupConnectionMinArgs {
  field: DatoCmsEntityPersonFieldSelector;
}


export interface DatoCmsEntityPersonGroupConnectionSumArgs {
  field: DatoCmsEntityPersonFieldSelector;
}

export interface DatoCmsEntityPersonSortInput {
  children?: InputMaybe<NodeSortInput>;
  company?: InputMaybe<SortOrderEnum>;
  headshot?: InputMaybe<DatoCmsFileFieldSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  positionTitle?: InputMaybe<SortOrderEnum>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
}

export interface DatoCmsEntitySkill extends Node {
  __typename?: 'DatoCmsEntitySkill';
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  logo?: Maybe<DatoCmsFileField>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  title?: Maybe<Scalars['String']>;
}

export interface DatoCmsEntitySkillConnection {
  __typename?: 'DatoCmsEntitySkillConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsEntitySkillEdge>;
  group: Array<DatoCmsEntitySkillGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsEntitySkill>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsEntitySkillConnectionDistinctArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillConnectionGroupArgs {
  field: DatoCmsEntitySkillFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsEntitySkillConnectionMaxArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillConnectionMinArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillConnectionSumArgs {
  field: DatoCmsEntitySkillFieldSelector;
}

export interface DatoCmsEntitySkillEdge {
  __typename?: 'DatoCmsEntitySkillEdge';
  next?: Maybe<DatoCmsEntitySkill>;
  node: DatoCmsEntitySkill;
  previous?: Maybe<DatoCmsEntitySkill>;
}

export interface DatoCmsEntitySkillFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  logo?: InputMaybe<DatoCmsFileFieldFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsEntitySkillFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  logo?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsEntitySkillFilterListInput {
  elemMatch?: InputMaybe<DatoCmsEntitySkillFilterInput>;
}

export interface DatoCmsEntitySkillGroupConnection {
  __typename?: 'DatoCmsEntitySkillGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsEntitySkillEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsEntitySkillGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsEntitySkill>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsEntitySkillGroupConnectionDistinctArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillGroupConnectionGroupArgs {
  field: DatoCmsEntitySkillFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsEntitySkillGroupConnectionMaxArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillGroupConnectionMinArgs {
  field: DatoCmsEntitySkillFieldSelector;
}


export interface DatoCmsEntitySkillGroupConnectionSumArgs {
  field: DatoCmsEntitySkillFieldSelector;
}

export interface DatoCmsEntitySkillSortInput {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  logo?: InputMaybe<DatoCmsFileFieldSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  title?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsFaviconMetaTags {
  __typename?: 'DatoCmsFaviconMetaTags';
  tags?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsFaviconMetaTagsFieldSelector {
  tags?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFaviconMetaTagsFilterInput {
  tags?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsFaviconMetaTagsSortInput {
  tags?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsField extends Node {
  __typename?: 'DatoCmsField';
  apiKey?: Maybe<Scalars['String']>;
  appeareance?: Maybe<Scalars['JSON']>;
  children: Array<Node>;
  defaultValue?: Maybe<Scalars['JSON']>;
  fieldType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  localized?: Maybe<Scalars['Boolean']>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  position?: Maybe<Scalars['Int']>;
  validators?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsFieldConnection {
  __typename?: 'DatoCmsFieldConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsFieldEdge>;
  group: Array<DatoCmsFieldGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsFieldConnectionDistinctArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldConnectionGroupArgs {
  field: DatoCmsFieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsFieldConnectionMaxArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldConnectionMinArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldConnectionSumArgs {
  field: DatoCmsFieldFieldSelector;
}

export interface DatoCmsFieldEdge {
  __typename?: 'DatoCmsFieldEdge';
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
}

export interface DatoCmsFieldFieldSelector {
  apiKey?: InputMaybe<FieldSelectorEnum>;
  appeareance?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  defaultValue?: InputMaybe<FieldSelectorEnum>;
  fieldType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  label?: InputMaybe<FieldSelectorEnum>;
  localized?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  position?: InputMaybe<FieldSelectorEnum>;
  validators?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFieldFilterInput {
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsFieldFilterListInput {
  elemMatch?: InputMaybe<DatoCmsFieldFilterInput>;
}

export interface DatoCmsFieldGroupConnection {
  __typename?: 'DatoCmsFieldGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsFieldEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsFieldGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsFieldGroupConnectionDistinctArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldGroupConnectionGroupArgs {
  field: DatoCmsFieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsFieldGroupConnectionMaxArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldGroupConnectionMinArgs {
  field: DatoCmsFieldFieldSelector;
}


export interface DatoCmsFieldGroupConnectionSumArgs {
  field: DatoCmsFieldFieldSelector;
}

export interface DatoCmsFieldSortInput {
  apiKey?: InputMaybe<SortOrderEnum>;
  appeareance?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  defaultValue?: InputMaybe<SortOrderEnum>;
  fieldType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  label?: InputMaybe<SortOrderEnum>;
  localized?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  position?: InputMaybe<SortOrderEnum>;
  validators?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsFileField {
  __typename?: 'DatoCmsFileField';
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  copyright?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  customData?: Maybe<Scalars['JSON']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  filename?: Maybe<Scalars['String']>;
  fixed?: Maybe<DatoCmsFixed>;
  fluid?: Maybe<DatoCmsFluid>;
  focalPoint?: Maybe<DatoCmsFocalPoint>;
  format?: Maybe<Scalars['String']>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Int']>;
  isImage?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  originalId: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  resolutions?: Maybe<DatoCmsFixed>;
  size?: Maybe<Scalars['Int']>;
  sizes?: Maybe<DatoCmsFluid>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  width?: Maybe<Scalars['Int']>;
}


export interface DatoCmsFileFieldCreatedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsFileFieldFixedArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsFileFieldFluidArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsFileFieldGatsbyImageDataArgs {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<DatoImagePlaceholder>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsFileFieldResolutionsArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsFileFieldSizesArgs {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsFileFieldUrlArgs {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
}

export interface DatoCmsFileFieldFieldSelector {
  alt?: InputMaybe<FieldSelectorEnum>;
  author?: InputMaybe<FieldSelectorEnum>;
  basename?: InputMaybe<FieldSelectorEnum>;
  blurhash?: InputMaybe<FieldSelectorEnum>;
  colors?: InputMaybe<DatoCmsColorFieldFieldSelector>;
  copyright?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  customData?: InputMaybe<FieldSelectorEnum>;
  exifInfo?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  fixed?: InputMaybe<DatoCmsFixedFieldSelector>;
  fluid?: InputMaybe<DatoCmsFluidFieldSelector>;
  focalPoint?: InputMaybe<DatoCmsFocalPointFieldSelector>;
  format?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  isImage?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  notes?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  path?: InputMaybe<FieldSelectorEnum>;
  resolutions?: InputMaybe<DatoCmsFixedFieldSelector>;
  size?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<DatoCmsFluidFieldSelector>;
  smartTags?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  video?: InputMaybe<DatoCmsAssetVideoFieldSelector>;
  width?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFileFieldFilterInput {
  alt?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  customData?: InputMaybe<JsonQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  focalPoint?: InputMaybe<DatoCmsFocalPointFilterInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
}

export interface DatoCmsFileFieldSortInput {
  alt?: InputMaybe<SortOrderEnum>;
  author?: InputMaybe<SortOrderEnum>;
  basename?: InputMaybe<SortOrderEnum>;
  blurhash?: InputMaybe<SortOrderEnum>;
  colors?: InputMaybe<DatoCmsColorFieldSortInput>;
  copyright?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  customData?: InputMaybe<SortOrderEnum>;
  exifInfo?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  fixed?: InputMaybe<DatoCmsFixedSortInput>;
  fluid?: InputMaybe<DatoCmsFluidSortInput>;
  focalPoint?: InputMaybe<DatoCmsFocalPointSortInput>;
  format?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  isImage?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  notes?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  path?: InputMaybe<SortOrderEnum>;
  resolutions?: InputMaybe<DatoCmsFixedSortInput>;
  size?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<DatoCmsFluidSortInput>;
  smartTags?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  video?: InputMaybe<DatoCmsAssetVideoSortInput>;
  width?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsFixed {
  __typename?: 'DatoCmsFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  sizes?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Int'];
}

export interface DatoCmsFixedFieldSelector {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFixedFilterInput {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
}

export interface DatoCmsFixedSortInput {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsFluid {
  __typename?: 'DatoCmsFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
}

export interface DatoCmsFluidFieldSelector {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFluidFilterInput {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
}

export interface DatoCmsFluidSortInput {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsFocalPoint {
  __typename?: 'DatoCmsFocalPoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
}

export interface DatoCmsFocalPointFieldSelector {
  x?: InputMaybe<FieldSelectorEnum>;
  y?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsFocalPointFilterInput {
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
}

export interface DatoCmsFocalPointSortInput {
  x?: InputMaybe<SortOrderEnum>;
  y?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsGlobalSeo {
  __typename?: 'DatoCmsGlobalSeo';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
}

export interface DatoCmsGlobalSeoFieldSelector {
  facebookPageUrl?: InputMaybe<FieldSelectorEnum>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFieldSelector>;
  siteName?: InputMaybe<FieldSelectorEnum>;
  titleSuffix?: InputMaybe<FieldSelectorEnum>;
  twitterAccount?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsGlobalSeoFilterInput {
  facebookPageUrl?: InputMaybe<StringQueryOperatorInput>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  siteName?: InputMaybe<StringQueryOperatorInput>;
  titleSuffix?: InputMaybe<StringQueryOperatorInput>;
  twitterAccount?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsGlobalSeoSortInput {
  facebookPageUrl?: InputMaybe<SortOrderEnum>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldSortInput>;
  siteName?: InputMaybe<SortOrderEnum>;
  titleSuffix?: InputMaybe<SortOrderEnum>;
  twitterAccount?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsImgixParams {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: InputMaybe<Scalars['String']>;
  /** Removes background from image. (https://docs.imgix.com/apis/rendering/background/bg-remove) */
  bgRemove?: InputMaybe<Scalars['Boolean']>;
  /** Overrides default fallback behavior for bg-remove failures. (https://docs.imgix.com/apis/rendering/background/bg-remove) */
  bgRemoveFallback?: InputMaybe<Scalars['Boolean']>;
  /** Replaces background from image using a string based prompt. (https://docs.imgix.com/apis/rendering/background/bg-replace) */
  bgReplace?: InputMaybe<Scalars['String']>;
  /** Overrides default fallback behavior for bg-replace failures. (https://docs.imgix.com/apis/rendering/background/bg-replace) */
  bgReplaceFallback?: InputMaybe<Scalars['Boolean']>;
  /** Provides a negative text suggestion for background replacement. (https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt) */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. (https://docs.imgix.com/apis/url/blending/blend-color) */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  blendH?: InputMaybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  blendW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: InputMaybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: InputMaybe<Scalars['String']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  expires?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  faces?: InputMaybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: InputMaybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Sets the fallback behavior for generative fill. (https://docs.imgix.com/apis/url/fill/fill-gen-fallback) */
  fillGenFallback?: InputMaybe<Scalars['Boolean']>;
  /** Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output. (https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt) */
  fillGenNegPrompt?: InputMaybe<Scalars['String']>;
  /** Sets the position of the Origin Image in relation to the generative fill. (https://docs.imgix.com/apis/url/fill/fill-gen-pos) */
  fillGenPos?: InputMaybe<Scalars['String']>;
  /** Provides a text suggestion to the generative fill parameter. (https://docs.imgix.com/apis/url/fill/fill-gen-prompt) */
  fillGenPrompt?: InputMaybe<Scalars['String']>;
  /** Sets the generative seed value. Used to generate similar outputs from different prompts. (https://docs.imgix.com/apis/url/fill/fill-gen-seed) */
  fillGenSeed?: InputMaybe<Scalars['Int']>;
  /** Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation (https://docs.imgix.com/apis/url/fill/fill-gradient-cs) */
  fillGradientCs?: InputMaybe<Scalars['String']>;
  /** Blends a gradient between two colors, {color1} and {color2}, along a straight path (https://docs.imgix.com/apis/url/fill/fill-gradient-linear) */
  fillGradientLinear?: InputMaybe<Scalars['String']>;
  /** The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left (https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction) */
  fillGradientLinearDirection?: InputMaybe<Scalars['String']>;
  /** The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2) (https://docs.imgix.com/apis/url/fill/fill-gradient-radial) */
  fillGradientRadial?: InputMaybe<Scalars['String']>;
  /** Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension (https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius) */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']>;
  /** Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width (https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x) */
  fillGradientRadialX?: InputMaybe<Scalars['String']>;
  /** Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height (https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y) */
  fillGradientRadialY?: InputMaybe<Scalars['String']>;
  /** Specifies if a gradient is radial (circular) or linear (straight) (https://docs.imgix.com/apis/url/fill/fill-gradient-type) */
  fillGradientType?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Specifies the framerate of the generated image. (undefined) */
  fps?: InputMaybe<Scalars['Int']>;
  /** Specifies the frame of an animated image to use. (undefined) */
  frame?: InputMaybe<Scalars['String']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: InputMaybe<Scalars['Int']>;
  /** Specifies the quality of the animated gif. The higher the value, the better more compression is applied. (undefined) */
  gifQ?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. (undefined) */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. (undefined) */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: InputMaybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: InputMaybe<Scalars['Int']>;
  /** Displays every Nth frame starting with the first frame. (undefined) */
  interval?: InputMaybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. (undefined) */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false) (undefined) */
  jpgProgressive?: InputMaybe<Scalars['Boolean']>;
  /** Specifies the number of times an animated image should repeat. A value of 0 means infinite looping. (undefined) */
  loop?: InputMaybe<Scalars['Int']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: InputMaybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  markBase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  markFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  markH?: InputMaybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. (https://docs.imgix.com/apis/url/watermark/mark-rot) */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. (https://docs.imgix.com/apis/url/watermark/mark-tile) */
  markTile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  markW?: InputMaybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  markX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  markY?: InputMaybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  minH?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  minW?: InputMaybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  orient?: InputMaybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf/page) */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. (https://docs.imgix.com/apis/url/pdf/pdf-annotation) */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: InputMaybe<Scalars['String']>;
  /** Reverses the frame order on the source animation. (undefined) */
  reverse?: InputMaybe<Scalars['Boolean']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Skips every Nth frame starting with the first frame. (undefined) */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies whether to sanitize an SVG. (undefined) */
  svgSanitize?: InputMaybe<Scalars['Boolean']>;
  /** Adds checkerboard behind images which support transparency. (https://docs.imgix.com/apis/url/fill/transparency) */
  transparency?: InputMaybe<Scalars['String']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txt-align) */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-lead) */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad) */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-track) */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. (https://docs.imgix.com/apis/url/text/txt-x) */
  txtX?: InputMaybe<Scalars['Int']>;
  /** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. (https://docs.imgix.com/apis/url/text/txt-y) */
  txtY?: InputMaybe<Scalars['Int']>;
  /** Uses generative AI fill to upscale low resolution images. (https://docs.imgix.com/apis/rendering/super-resolution/upscale) */
  upscale?: InputMaybe<Scalars['Boolean']>;
  /** Overrides default fallback behavior for super resolution failures (https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback) */
  upscaleFallback?: InputMaybe<Scalars['Boolean']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: InputMaybe<Scalars['String']>;
}

export interface DatoCmsLatLonField {
  __typename?: 'DatoCmsLatLonField';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
}

export interface DatoCmsLayoutSection extends Node {
  __typename?: 'DatoCmsLayoutSection';
  children: Array<Node>;
  component?: Maybe<DatoCmsUnionForDatoCmsLayoutSectionComponent>;
  desktopBottomPadding?: Maybe<Scalars['String']>;
  desktopTopPadding?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  mobileBottomPadding?: Maybe<Scalars['String']>;
  mobileTopPadding?: Maybe<Scalars['String']>;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  tabletBottomPadding?: Maybe<Scalars['String']>;
  tabletTopPadding?: Maybe<Scalars['String']>;
}

export interface DatoCmsLayoutSectionConnection {
  __typename?: 'DatoCmsLayoutSectionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsLayoutSectionEdge>;
  group: Array<DatoCmsLayoutSectionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsLayoutSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsLayoutSectionConnectionDistinctArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionConnectionGroupArgs {
  field: DatoCmsLayoutSectionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsLayoutSectionConnectionMaxArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionConnectionMinArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionConnectionSumArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}

export interface DatoCmsLayoutSectionEdge {
  __typename?: 'DatoCmsLayoutSectionEdge';
  next?: Maybe<DatoCmsLayoutSection>;
  node: DatoCmsLayoutSection;
  previous?: Maybe<DatoCmsLayoutSection>;
}

export interface DatoCmsLayoutSectionFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  desktopBottomPadding?: InputMaybe<FieldSelectorEnum>;
  desktopTopPadding?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  mobileBottomPadding?: InputMaybe<FieldSelectorEnum>;
  mobileTopPadding?: InputMaybe<FieldSelectorEnum>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  tabletBottomPadding?: InputMaybe<FieldSelectorEnum>;
  tabletTopPadding?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsLayoutSectionFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  desktopBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  desktopTopPadding?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  mobileBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  mobileTopPadding?: InputMaybe<StringQueryOperatorInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  tabletBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  tabletTopPadding?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsLayoutSectionFilterListInput {
  elemMatch?: InputMaybe<DatoCmsLayoutSectionFilterInput>;
}

export interface DatoCmsLayoutSectionGroupConnection {
  __typename?: 'DatoCmsLayoutSectionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsLayoutSectionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsLayoutSectionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsLayoutSection>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsLayoutSectionGroupConnectionDistinctArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionGroupConnectionGroupArgs {
  field: DatoCmsLayoutSectionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsLayoutSectionGroupConnectionMaxArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionGroupConnectionMinArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}


export interface DatoCmsLayoutSectionGroupConnectionSumArgs {
  field: DatoCmsLayoutSectionFieldSelector;
}

export interface DatoCmsLayoutSectionSortInput {
  children?: InputMaybe<NodeSortInput>;
  desktopBottomPadding?: InputMaybe<SortOrderEnum>;
  desktopTopPadding?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  mobileBottomPadding?: InputMaybe<SortOrderEnum>;
  mobileTopPadding?: InputMaybe<SortOrderEnum>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  tabletBottomPadding?: InputMaybe<SortOrderEnum>;
  tabletTopPadding?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsMetaField {
  __typename?: 'DatoCmsMetaField';
  createdAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
}


export interface DatoCmsMetaFieldCreatedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsMetaFieldFirstPublishedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsMetaFieldPublishedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DatoCmsMetaFieldUpdatedAtArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface DatoCmsMetaFieldFieldSelector {
  createdAt?: InputMaybe<FieldSelectorEnum>;
  firstPublishedAt?: InputMaybe<FieldSelectorEnum>;
  isValid?: InputMaybe<FieldSelectorEnum>;
  publishedAt?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsMetaFieldFilterInput {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  firstPublishedAt?: InputMaybe<DateQueryOperatorInput>;
  isValid?: InputMaybe<BooleanQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
}

export interface DatoCmsMetaFieldSortInput {
  createdAt?: InputMaybe<SortOrderEnum>;
  firstPublishedAt?: InputMaybe<SortOrderEnum>;
  isValid?: InputMaybe<SortOrderEnum>;
  publishedAt?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsModel extends Node {
  __typename?: 'DatoCmsModel';
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  children: Array<Node>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<DatoCmsField>>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  modularBlock?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  tree?: Maybe<Scalars['Boolean']>;
}

export interface DatoCmsModelConnection {
  __typename?: 'DatoCmsModelConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsModelEdge>;
  group: Array<DatoCmsModelGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsModelConnectionDistinctArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelConnectionGroupArgs {
  field: DatoCmsModelFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsModelConnectionMaxArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelConnectionMinArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelConnectionSumArgs {
  field: DatoCmsModelFieldSelector;
}

export interface DatoCmsModelEdge {
  __typename?: 'DatoCmsModelEdge';
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
}

export interface DatoCmsModelFieldSelector {
  allLocalesRequired?: InputMaybe<FieldSelectorEnum>;
  apiKey?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  collectionAppeareance?: InputMaybe<FieldSelectorEnum>;
  draftModeActive?: InputMaybe<FieldSelectorEnum>;
  fields?: InputMaybe<DatoCmsFieldFieldSelector>;
  hasSingletonItem?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  modularBlock?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  orderingDirection?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  singleton?: InputMaybe<FieldSelectorEnum>;
  sortable?: InputMaybe<FieldSelectorEnum>;
  tree?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsModelFilterInput {
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFieldFilterListInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
}

export interface DatoCmsModelGroupConnection {
  __typename?: 'DatoCmsModelGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsModelEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsModelGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsModelGroupConnectionDistinctArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelGroupConnectionGroupArgs {
  field: DatoCmsModelFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsModelGroupConnectionMaxArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelGroupConnectionMinArgs {
  field: DatoCmsModelFieldSelector;
}


export interface DatoCmsModelGroupConnectionSumArgs {
  field: DatoCmsModelFieldSelector;
}

export interface DatoCmsModelSortInput {
  allLocalesRequired?: InputMaybe<SortOrderEnum>;
  apiKey?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  collectionAppeareance?: InputMaybe<SortOrderEnum>;
  draftModeActive?: InputMaybe<SortOrderEnum>;
  fields?: InputMaybe<DatoCmsFieldSortInput>;
  hasSingletonItem?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  modularBlock?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  orderingDirection?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  singleton?: InputMaybe<SortOrderEnum>;
  sortable?: InputMaybe<SortOrderEnum>;
  tree?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsSeoField {
  __typename?: 'DatoCmsSeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
}

export interface DatoCmsSeoFieldFieldSelector {
  description?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<DatoCmsAssetFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  twitterCard?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsSeoFieldFilterInput {
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<DatoCmsAssetFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  twitterCard?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsSeoFieldSortInput {
  description?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<DatoCmsAssetSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  twitterCard?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsSeoMetaTags {
  __typename?: 'DatoCmsSeoMetaTags';
  tags?: Maybe<Scalars['JSON']>;
}

export interface DatoCmsSeoMetaTagsFieldSelector {
  tags?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsSeoMetaTagsFilterInput {
  tags?: InputMaybe<JsonQueryOperatorInput>;
}

export interface DatoCmsSeoMetaTagsSortInput {
  tags?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsSite extends Node {
  __typename?: 'DatoCmsSite';
  children: Array<Node>;
  domain?: Maybe<Scalars['String']>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  globalSeo?: Maybe<DatoCmsGlobalSeo>;
  id: Scalars['ID'];
  internal: Internal;
  internalDomain: Scalars['String'];
  locales: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
}


export interface DatoCmsSiteGlobalSeoArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface DatoCmsSiteConnection {
  __typename?: 'DatoCmsSiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsSiteEdge>;
  group: Array<DatoCmsSiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsSiteConnectionDistinctArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteConnectionGroupArgs {
  field: DatoCmsSiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsSiteConnectionMaxArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteConnectionMinArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteConnectionSumArgs {
  field: DatoCmsSiteFieldSelector;
}

export interface DatoCmsSiteEdge {
  __typename?: 'DatoCmsSiteEdge';
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
}

export interface DatoCmsSiteFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  domain?: InputMaybe<FieldSelectorEnum>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFieldSelector>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalDomain?: InputMaybe<FieldSelectorEnum>;
  locales?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  noIndex?: InputMaybe<FieldSelectorEnum>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
}

export interface DatoCmsSiteFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
}

export interface DatoCmsSiteGroupConnection {
  __typename?: 'DatoCmsSiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsSiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsSiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsSiteGroupConnectionDistinctArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteGroupConnectionGroupArgs {
  field: DatoCmsSiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsSiteGroupConnectionMaxArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteGroupConnectionMinArgs {
  field: DatoCmsSiteFieldSelector;
}


export interface DatoCmsSiteGroupConnectionSumArgs {
  field: DatoCmsSiteFieldSelector;
}

export interface DatoCmsSiteSortInput {
  children?: InputMaybe<NodeSortInput>;
  domain?: InputMaybe<SortOrderEnum>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsSortInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalDomain?: InputMaybe<SortOrderEnum>;
  locales?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  noIndex?: InputMaybe<SortOrderEnum>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
}

export interface DatoCmsTemplatePage extends Node {
  __typename?: 'DatoCmsTemplatePage';
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  layouts?: Maybe<Array<Maybe<DatoCmsLayoutSection>>>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  searchEngineOptimization?: Maybe<DatoCmsSeoField>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface DatoCmsTemplatePageConnection {
  __typename?: 'DatoCmsTemplatePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTemplatePageEdge>;
  group: Array<DatoCmsTemplatePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTemplatePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTemplatePageConnectionDistinctArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageConnectionGroupArgs {
  field: DatoCmsTemplatePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTemplatePageConnectionMaxArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageConnectionMinArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageConnectionSumArgs {
  field: DatoCmsTemplatePageFieldSelector;
}

export interface DatoCmsTemplatePageEdge {
  __typename?: 'DatoCmsTemplatePageEdge';
  next?: Maybe<DatoCmsTemplatePage>;
  node: DatoCmsTemplatePage;
  previous?: Maybe<DatoCmsTemplatePage>;
}

export interface DatoCmsTemplatePageFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  layouts?: InputMaybe<DatoCmsLayoutSectionFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsTemplatePageFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  layouts?: InputMaybe<DatoCmsLayoutSectionFilterListInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsTemplatePageGroupConnection {
  __typename?: 'DatoCmsTemplatePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTemplatePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsTemplatePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTemplatePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTemplatePageGroupConnectionDistinctArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageGroupConnectionGroupArgs {
  field: DatoCmsTemplatePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTemplatePageGroupConnectionMaxArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageGroupConnectionMinArgs {
  field: DatoCmsTemplatePageFieldSelector;
}


export interface DatoCmsTemplatePageGroupConnectionSumArgs {
  field: DatoCmsTemplatePageFieldSelector;
}

export interface DatoCmsTemplatePageSortInput {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  layouts?: InputMaybe<DatoCmsLayoutSectionSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsTemplateProject extends Node {
  __typename?: 'DatoCmsTemplateProject';
  blurb?: Maybe<Scalars['String']>;
  blurbNode?: Maybe<DatoCmsTextNode>;
  body?: Maybe<DatoCmsDatoCmsTemplateProjectBodyStructuredText>;
  children: Array<Node>;
  cms?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<DatoCmsComponentImage>;
  framework?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  role?: Maybe<Scalars['String']>;
  searchEngineOptimization?: Maybe<DatoCmsSeoField>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
}

export interface DatoCmsTemplateProjectConnection {
  __typename?: 'DatoCmsTemplateProjectConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTemplateProjectEdge>;
  group: Array<DatoCmsTemplateProjectGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTemplateProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTemplateProjectConnectionDistinctArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectConnectionGroupArgs {
  field: DatoCmsTemplateProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTemplateProjectConnectionMaxArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectConnectionMinArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectConnectionSumArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}

export interface DatoCmsTemplateProjectEdge {
  __typename?: 'DatoCmsTemplateProjectEdge';
  next?: Maybe<DatoCmsTemplateProject>;
  node: DatoCmsTemplateProject;
  previous?: Maybe<DatoCmsTemplateProject>;
}

export interface DatoCmsTemplateProjectFieldSelector {
  blurb?: InputMaybe<FieldSelectorEnum>;
  blurbNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  body?: InputMaybe<DatoCmsDatoCmsTemplateProjectBodyStructuredTextFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  cms?: InputMaybe<FieldSelectorEnum>;
  featured?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFieldSelector>;
  framework?: InputMaybe<FieldSelectorEnum>;
  github?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  role?: InputMaybe<FieldSelectorEnum>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  year?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsTemplateProjectFilterInput {
  blurb?: InputMaybe<StringQueryOperatorInput>;
  blurbNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  body?: InputMaybe<DatoCmsDatoCmsTemplateProjectBodyStructuredTextFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  cms?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  framework?: InputMaybe<StringQueryOperatorInput>;
  github?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  role?: InputMaybe<StringQueryOperatorInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsTemplateProjectGroupConnection {
  __typename?: 'DatoCmsTemplateProjectGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTemplateProjectEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsTemplateProjectGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTemplateProject>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTemplateProjectGroupConnectionDistinctArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectGroupConnectionGroupArgs {
  field: DatoCmsTemplateProjectFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTemplateProjectGroupConnectionMaxArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectGroupConnectionMinArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}


export interface DatoCmsTemplateProjectGroupConnectionSumArgs {
  field: DatoCmsTemplateProjectFieldSelector;
}

export interface DatoCmsTemplateProjectSortInput {
  blurb?: InputMaybe<SortOrderEnum>;
  blurbNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  body?: InputMaybe<DatoCmsDatoCmsTemplateProjectBodyStructuredTextSortInput>;
  children?: InputMaybe<NodeSortInput>;
  cms?: InputMaybe<SortOrderEnum>;
  featured?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<DatoCmsComponentImageSortInput>;
  framework?: InputMaybe<SortOrderEnum>;
  github?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  role?: InputMaybe<SortOrderEnum>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  year?: InputMaybe<SortOrderEnum>;
}

export interface DatoCmsTextNode extends Node {
  __typename?: 'DatoCmsTextNode';
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
}

export interface DatoCmsTextNodeConnection {
  __typename?: 'DatoCmsTextNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTextNodeEdge>;
  group: Array<DatoCmsTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTextNodeConnectionDistinctArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeConnectionGroupArgs {
  field: DatoCmsTextNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTextNodeConnectionMaxArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeConnectionMinArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeConnectionSumArgs {
  field: DatoCmsTextNodeFieldSelector;
}

export interface DatoCmsTextNodeEdge {
  __typename?: 'DatoCmsTextNodeEdge';
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
}

export interface DatoCmsTextNodeFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
}

export interface DatoCmsTextNodeFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
}

export interface DatoCmsTextNodeGroupConnection {
  __typename?: 'DatoCmsTextNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTextNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTextNodeGroupConnectionDistinctArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeGroupConnectionGroupArgs {
  field: DatoCmsTextNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTextNodeGroupConnectionMaxArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeGroupConnectionMinArgs {
  field: DatoCmsTextNodeFieldSelector;
}


export interface DatoCmsTextNodeGroupConnectionSumArgs {
  field: DatoCmsTextNodeFieldSelector;
}

export interface DatoCmsTextNodeSortInput {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
}

export interface DatoCmsTimelineInstance extends Node {
  __typename?: 'DatoCmsTimelineInstance';
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  descriptionNode?: Maybe<DatoCmsTextNode>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  year?: Maybe<Scalars['String']>;
}

export interface DatoCmsTimelineInstanceConnection {
  __typename?: 'DatoCmsTimelineInstanceConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTimelineInstanceEdge>;
  group: Array<DatoCmsTimelineInstanceGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTimelineInstance>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTimelineInstanceConnectionDistinctArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceConnectionGroupArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTimelineInstanceConnectionMaxArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceConnectionMinArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceConnectionSumArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}

export interface DatoCmsTimelineInstanceEdge {
  __typename?: 'DatoCmsTimelineInstanceEdge';
  next?: Maybe<DatoCmsTimelineInstance>;
  node: DatoCmsTimelineInstance;
  previous?: Maybe<DatoCmsTimelineInstance>;
}

export interface DatoCmsTimelineInstanceFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFieldSelector>;
  heading?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  year?: InputMaybe<FieldSelectorEnum>;
}

export interface DatoCmsTimelineInstanceFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  year?: InputMaybe<StringQueryOperatorInput>;
}

export interface DatoCmsTimelineInstanceFilterListInput {
  elemMatch?: InputMaybe<DatoCmsTimelineInstanceFilterInput>;
}

export interface DatoCmsTimelineInstanceGroupConnection {
  __typename?: 'DatoCmsTimelineInstanceGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTimelineInstanceEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DatoCmsTimelineInstanceGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTimelineInstance>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DatoCmsTimelineInstanceGroupConnectionDistinctArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceGroupConnectionGroupArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DatoCmsTimelineInstanceGroupConnectionMaxArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceGroupConnectionMinArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}


export interface DatoCmsTimelineInstanceGroupConnectionSumArgs {
  field: DatoCmsTimelineInstanceFieldSelector;
}

export interface DatoCmsTimelineInstanceSortInput {
  children?: InputMaybe<NodeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeSortInput>;
  heading?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  year?: InputMaybe<SortOrderEnum>;
}

export type DatoCmsUnionForDatoCmsLayoutSectionComponent = DatoCmsComponentHero | DatoCmsComponentSkillsBar | DatoCmsComponentStory | DatoCmsComponentTestimonialCarousel;

export interface DatoCmsVideoField {
  __typename?: 'DatoCmsVideoField';
  height?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
}

export enum DatoImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export interface Directory extends Node {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
}


export interface DirectoryAccessTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryAtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryBirthTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryChangeTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryCtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryModifiedTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface DirectoryMtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface DirectoryConnection {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DirectoryConnectionDistinctArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryConnectionGroupArgs {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DirectoryConnectionMaxArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryConnectionMinArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryConnectionSumArgs {
  field: DirectoryFieldSelector;
}

export interface DirectoryEdge {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
}

export interface DirectoryFieldSelector {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
}

export interface DirectoryFilterInput {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
}

export interface DirectoryGroupConnection {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface DirectoryGroupConnectionDistinctArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryGroupConnectionGroupArgs {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface DirectoryGroupConnectionMaxArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryGroupConnectionMinArgs {
  field: DirectoryFieldSelector;
}


export interface DirectoryGroupConnectionSumArgs {
  field: DirectoryFieldSelector;
}

export interface DirectorySortInput {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
}

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export interface File extends Node {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
}


export interface FileAccessTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileAtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileBirthTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileChangeTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileCtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileModifiedTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}


export interface FileMtimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface FileConnection {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface FileConnectionDistinctArgs {
  field: FileFieldSelector;
}


export interface FileConnectionGroupArgs {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface FileConnectionMaxArgs {
  field: FileFieldSelector;
}


export interface FileConnectionMinArgs {
  field: FileFieldSelector;
}


export interface FileConnectionSumArgs {
  field: FileFieldSelector;
}

export interface FileEdge {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
}

export interface FileFieldSelector {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
}

export interface FileFilterInput {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
}

export interface FileGroupConnection {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface FileGroupConnectionDistinctArgs {
  field: FileFieldSelector;
}


export interface FileGroupConnectionGroupArgs {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface FileGroupConnectionMaxArgs {
  field: FileFieldSelector;
}


export interface FileGroupConnectionMinArgs {
  field: FileFieldSelector;
}


export interface FileGroupConnectionSumArgs {
  field: FileFieldSelector;
}

export interface FileSortInput {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
}

export interface FloatQueryOperatorInput {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
}

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export interface IntQueryOperatorInput {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
}

export interface Internal {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
}

export interface InternalFieldSelector {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
}

export interface InternalFilterInput {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
}

export interface InternalSortInput {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
}

export interface JsonQueryOperatorInput {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
}

/** Node Interface */
export interface Node {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
}

export interface NodeFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
}

export interface NodeFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
}

export interface NodeFilterListInput {
  elemMatch?: InputMaybe<NodeFilterInput>;
}

export interface NodeSortInput {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
}

export interface PageInfo {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
}

export interface Query {
  __typename?: 'Query';
  allDatoCmsAsset: DatoCmsAssetConnection;
  allDatoCmsComponentCallToAction: DatoCmsComponentCallToActionConnection;
  allDatoCmsComponentHero: DatoCmsComponentHeroConnection;
  allDatoCmsComponentImage: DatoCmsComponentImageConnection;
  allDatoCmsComponentSkillsBar: DatoCmsComponentSkillsBarConnection;
  allDatoCmsComponentStory: DatoCmsComponentStoryConnection;
  allDatoCmsComponentTestimonial: DatoCmsComponentTestimonialConnection;
  allDatoCmsComponentTestimonialCarousel: DatoCmsComponentTestimonialCarouselConnection;
  allDatoCmsEntityPerson: DatoCmsEntityPersonConnection;
  allDatoCmsEntitySkill: DatoCmsEntitySkillConnection;
  allDatoCmsField: DatoCmsFieldConnection;
  allDatoCmsLayoutSection: DatoCmsLayoutSectionConnection;
  allDatoCmsModel: DatoCmsModelConnection;
  allDatoCmsSite: DatoCmsSiteConnection;
  allDatoCmsTemplatePage: DatoCmsTemplatePageConnection;
  allDatoCmsTemplateProject: DatoCmsTemplateProjectConnection;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  allDatoCmsTimelineInstance: DatoCmsTimelineInstanceConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  datoCmsComponentCallToAction?: Maybe<DatoCmsComponentCallToAction>;
  datoCmsComponentHero?: Maybe<DatoCmsComponentHero>;
  datoCmsComponentImage?: Maybe<DatoCmsComponentImage>;
  datoCmsComponentSkillsBar?: Maybe<DatoCmsComponentSkillsBar>;
  datoCmsComponentStory?: Maybe<DatoCmsComponentStory>;
  datoCmsComponentTestimonial?: Maybe<DatoCmsComponentTestimonial>;
  datoCmsComponentTestimonialCarousel?: Maybe<DatoCmsComponentTestimonialCarousel>;
  datoCmsEntityPerson?: Maybe<DatoCmsEntityPerson>;
  datoCmsEntitySkill?: Maybe<DatoCmsEntitySkill>;
  datoCmsField?: Maybe<DatoCmsField>;
  datoCmsLayoutSection?: Maybe<DatoCmsLayoutSection>;
  datoCmsModel?: Maybe<DatoCmsModel>;
  datoCmsSite?: Maybe<DatoCmsSite>;
  datoCmsTemplatePage?: Maybe<DatoCmsTemplatePage>;
  datoCmsTemplateProject?: Maybe<DatoCmsTemplateProject>;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  datoCmsTimelineInstance?: Maybe<DatoCmsTimelineInstance>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
}


export interface QueryAllDatoCmsAssetArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsAssetSortInput>>>;
}


export interface QueryAllDatoCmsComponentCallToActionArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentCallToActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentCallToActionSortInput>>>;
}


export interface QueryAllDatoCmsComponentHeroArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentHeroFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentHeroSortInput>>>;
}


export interface QueryAllDatoCmsComponentImageArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentImageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentImageSortInput>>>;
}


export interface QueryAllDatoCmsComponentSkillsBarArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentSkillsBarFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentSkillsBarSortInput>>>;
}


export interface QueryAllDatoCmsComponentStoryArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentStoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentStorySortInput>>>;
}


export interface QueryAllDatoCmsComponentTestimonialArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentTestimonialFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentTestimonialSortInput>>>;
}


export interface QueryAllDatoCmsComponentTestimonialCarouselArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsComponentTestimonialCarouselFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsComponentTestimonialCarouselSortInput>>>;
}


export interface QueryAllDatoCmsEntityPersonArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsEntityPersonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsEntityPersonSortInput>>>;
}


export interface QueryAllDatoCmsEntitySkillArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsEntitySkillFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsEntitySkillSortInput>>>;
}


export interface QueryAllDatoCmsFieldArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsFieldFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsFieldSortInput>>>;
}


export interface QueryAllDatoCmsLayoutSectionArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsLayoutSectionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsLayoutSectionSortInput>>>;
}


export interface QueryAllDatoCmsModelArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsModelFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsModelSortInput>>>;
}


export interface QueryAllDatoCmsSiteArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsSiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsSiteSortInput>>>;
}


export interface QueryAllDatoCmsTemplatePageArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTemplatePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTemplatePageSortInput>>>;
}


export interface QueryAllDatoCmsTemplateProjectArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTemplateProjectFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTemplateProjectSortInput>>>;
}


export interface QueryAllDatoCmsTextNodeArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTextNodeSortInput>>>;
}


export interface QueryAllDatoCmsTimelineInstanceArgs {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTimelineInstanceFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTimelineInstanceSortInput>>>;
}


export interface QueryAllDirectoryArgs {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
}


export interface QueryAllFileArgs {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
}


export interface QueryAllSiteArgs {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
}


export interface QueryAllSiteBuildMetadataArgs {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
}


export interface QueryAllSiteFunctionArgs {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
}


export interface QueryAllSitePageArgs {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
}


export interface QueryAllSitePluginArgs {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
}


export interface QueryDatoCmsAssetArgs {
  author?: InputMaybe<StringQueryOperatorInput>;
  basename?: InputMaybe<StringQueryOperatorInput>;
  blurhash?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  colors?: InputMaybe<DatoCmsColorFieldFilterListInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  exifInfo?: InputMaybe<JsonQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  fixed?: InputMaybe<DatoCmsFixedFilterInput>;
  fluid?: InputMaybe<DatoCmsFluidFilterInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isImage?: InputMaybe<BooleanQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  notes?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  resolutions?: InputMaybe<DatoCmsFixedFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<DatoCmsFluidFilterInput>;
  smartTags?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  video?: InputMaybe<DatoCmsAssetVideoFilterInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
}


export interface QueryDatoCmsComponentCallToActionArgs {
  buttonType?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  hoverColor?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  isDark?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  size?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsComponentHeroArgs {
  body?: InputMaybe<DatoCmsDatoCmsComponentHeroBodyStructuredTextFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctas?: InputMaybe<DatoCmsComponentCallToActionFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  secondaryImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  tertiaryImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
}


export interface QueryDatoCmsComponentImageArgs {
  alt?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  captionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  desktopImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  mobileImage?: InputMaybe<DatoCmsFileFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsComponentSkillsBarArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  skills?: InputMaybe<DatoCmsEntitySkillFilterListInput>;
}


export interface QueryDatoCmsComponentStoryArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  subheading?: InputMaybe<StringQueryOperatorInput>;
  subheadingNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  timelineItems?: InputMaybe<DatoCmsTimelineInstanceFilterListInput>;
}


export interface QueryDatoCmsComponentTestimonialArgs {
  author?: InputMaybe<DatoCmsEntityPersonFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  quote?: InputMaybe<DatoCmsDatoCmsComponentTestimonialQuoteStructuredTextFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}


export interface QueryDatoCmsComponentTestimonialCarouselArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  quotes?: InputMaybe<DatoCmsComponentTestimonialFilterListInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}


export interface QueryDatoCmsEntityPersonArgs {
  children?: InputMaybe<NodeFilterListInput>;
  company?: InputMaybe<StringQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  headshot?: InputMaybe<DatoCmsFileFieldFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  positionTitle?: InputMaybe<StringQueryOperatorInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
}


export interface QueryDatoCmsEntitySkillArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<DatoCmsFileFieldFilterInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsFieldArgs {
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  appeareance?: InputMaybe<JsonQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  defaultValue?: InputMaybe<JsonQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  fieldType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  localized?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  validators?: InputMaybe<JsonQueryOperatorInput>;
}


export interface QueryDatoCmsLayoutSectionArgs {
  children?: InputMaybe<NodeFilterListInput>;
  desktopBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  desktopTopPadding?: InputMaybe<StringQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  mobileBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  mobileTopPadding?: InputMaybe<StringQueryOperatorInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  tabletBottomPadding?: InputMaybe<StringQueryOperatorInput>;
  tabletTopPadding?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsModelArgs {
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  fields?: InputMaybe<DatoCmsFieldFilterListInput>;
  hasSingletonItem?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  modularBlock?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  orderingDirection?: InputMaybe<StringQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  singleton?: InputMaybe<BooleanQueryOperatorInput>;
  sortable?: InputMaybe<BooleanQueryOperatorInput>;
  tree?: InputMaybe<BooleanQueryOperatorInput>;
}


export interface QueryDatoCmsSiteArgs {
  children?: InputMaybe<NodeFilterListInput>;
  domain?: InputMaybe<StringQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  faviconMetaTags?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
  globalSeo?: InputMaybe<DatoCmsGlobalSeoFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalDomain?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  noIndex?: InputMaybe<BooleanQueryOperatorInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
}


export interface QueryDatoCmsTemplatePageArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  layouts?: InputMaybe<DatoCmsLayoutSectionFilterListInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsTemplateProjectArgs {
  blurb?: InputMaybe<StringQueryOperatorInput>;
  blurbNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  body?: InputMaybe<DatoCmsDatoCmsTemplateProjectBodyStructuredTextFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  cms?: InputMaybe<StringQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  featuredImage?: InputMaybe<DatoCmsComponentImageFilterInput>;
  framework?: InputMaybe<StringQueryOperatorInput>;
  github?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  role?: InputMaybe<StringQueryOperatorInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDatoCmsTextNodeArgs {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<NodeFilterInput>;
}


export interface QueryDatoCmsTimelineInstanceArgs {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionNode?: InputMaybe<DatoCmsTextNodeFilterInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  year?: InputMaybe<StringQueryOperatorInput>;
}


export interface QueryDirectoryArgs {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
}


export interface QueryFileArgs {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
}


export interface QuerySiteArgs {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
}


export interface QuerySiteBuildMetadataArgs {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
}


export interface QuerySiteFunctionArgs {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
}


export interface QuerySitePageArgs {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
}


export interface QuerySitePluginArgs {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
}

export interface Site extends Node {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
}


export interface SiteBuildTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface SiteBuildMetadata extends Node {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
}


export interface SiteBuildMetadataBuildTimeArgs {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}

export interface SiteBuildMetadataConnection {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteBuildMetadataConnectionDistinctArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataConnectionGroupArgs {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteBuildMetadataConnectionMaxArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataConnectionMinArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataConnectionSumArgs {
  field: SiteBuildMetadataFieldSelector;
}

export interface SiteBuildMetadataEdge {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
}

export interface SiteBuildMetadataFieldSelector {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
}

export interface SiteBuildMetadataFilterInput {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
}

export interface SiteBuildMetadataGroupConnection {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteBuildMetadataGroupConnectionDistinctArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataGroupConnectionGroupArgs {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteBuildMetadataGroupConnectionMaxArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataGroupConnectionMinArgs {
  field: SiteBuildMetadataFieldSelector;
}


export interface SiteBuildMetadataGroupConnectionSumArgs {
  field: SiteBuildMetadataFieldSelector;
}

export interface SiteBuildMetadataSortInput {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
}

export interface SiteConnection {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteConnectionDistinctArgs {
  field: SiteFieldSelector;
}


export interface SiteConnectionGroupArgs {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteConnectionMaxArgs {
  field: SiteFieldSelector;
}


export interface SiteConnectionMinArgs {
  field: SiteFieldSelector;
}


export interface SiteConnectionSumArgs {
  field: SiteFieldSelector;
}

export interface SiteEdge {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
}

export interface SiteFieldSelector {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  port?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
}

export interface SiteFilterInput {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
}

export interface SiteFunction extends Node {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
}

export interface SiteFunctionConnection {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteFunctionConnectionDistinctArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionConnectionGroupArgs {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteFunctionConnectionMaxArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionConnectionMinArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionConnectionSumArgs {
  field: SiteFunctionFieldSelector;
}

export interface SiteFunctionEdge {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
}

export interface SiteFunctionFieldSelector {
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
}

export interface SiteFunctionFilterInput {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
}

export interface SiteFunctionGroupConnection {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteFunctionGroupConnectionDistinctArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionGroupConnectionGroupArgs {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteFunctionGroupConnectionMaxArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionGroupConnectionMinArgs {
  field: SiteFunctionFieldSelector;
}


export interface SiteFunctionGroupConnectionSumArgs {
  field: SiteFunctionFieldSelector;
}

export interface SiteFunctionSortInput {
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  functionRoute?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  matchPath?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginName?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
}

export interface SiteGraphqlTypegen {
  __typename?: 'SiteGraphqlTypegen';
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
  typesOutputPath?: Maybe<Scalars['String']>;
}

export interface SiteGraphqlTypegenFieldSelector {
  documentSearchPaths?: InputMaybe<FieldSelectorEnum>;
  generateOnBuild?: InputMaybe<FieldSelectorEnum>;
  typesOutputPath?: InputMaybe<FieldSelectorEnum>;
}

export interface SiteGraphqlTypegenFilterInput {
  documentSearchPaths?: InputMaybe<StringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
}

export interface SiteGraphqlTypegenSortInput {
  documentSearchPaths?: InputMaybe<SortOrderEnum>;
  generateOnBuild?: InputMaybe<SortOrderEnum>;
  typesOutputPath?: InputMaybe<SortOrderEnum>;
}

export interface SiteGroupConnection {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SiteGroupConnectionDistinctArgs {
  field: SiteFieldSelector;
}


export interface SiteGroupConnectionGroupArgs {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SiteGroupConnectionMaxArgs {
  field: SiteFieldSelector;
}


export interface SiteGroupConnectionMinArgs {
  field: SiteFieldSelector;
}


export interface SiteGroupConnectionSumArgs {
  field: SiteFieldSelector;
}

export interface SitePage extends Node {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
}

export interface SitePageConnection {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SitePageConnectionDistinctArgs {
  field: SitePageFieldSelector;
}


export interface SitePageConnectionGroupArgs {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SitePageConnectionMaxArgs {
  field: SitePageFieldSelector;
}


export interface SitePageConnectionMinArgs {
  field: SitePageFieldSelector;
}


export interface SitePageConnectionSumArgs {
  field: SitePageFieldSelector;
}

export interface SitePageEdge {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
}

export interface SitePageFieldSelector {
  children?: InputMaybe<NodeFieldSelector>;
  component?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  path?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
}

export interface SitePageFilterInput {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
}

export interface SitePageGroupConnection {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SitePageGroupConnectionDistinctArgs {
  field: SitePageFieldSelector;
}


export interface SitePageGroupConnectionGroupArgs {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SitePageGroupConnectionMaxArgs {
  field: SitePageFieldSelector;
}


export interface SitePageGroupConnectionMinArgs {
  field: SitePageFieldSelector;
}


export interface SitePageGroupConnectionSumArgs {
  field: SitePageFieldSelector;
}

export interface SitePageSortInput {
  children?: InputMaybe<NodeSortInput>;
  component?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  path?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
}

export interface SitePlugin extends Node {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
}

export interface SitePluginConnection {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SitePluginConnectionDistinctArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginConnectionGroupArgs {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SitePluginConnectionMaxArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginConnectionMinArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginConnectionSumArgs {
  field: SitePluginFieldSelector;
}

export interface SitePluginEdge {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
}

export interface SitePluginFieldSelector {
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  resolve?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
}

export interface SitePluginFilterInput {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
}

export interface SitePluginGroupConnection {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
}


export interface SitePluginGroupConnectionDistinctArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginGroupConnectionGroupArgs {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface SitePluginGroupConnectionMaxArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginGroupConnectionMinArgs {
  field: SitePluginFieldSelector;
}


export interface SitePluginGroupConnectionSumArgs {
  field: SitePluginFieldSelector;
}

export interface SitePluginSortInput {
  browserAPIs?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  resolve?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
}

export interface SiteSiteMetadata {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface SiteSiteMetadataFieldSelector {
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
}

export interface SiteSiteMetadataFilterInput {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
}

export interface SiteSiteMetadataSortInput {
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
}

export interface SiteSortInput {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenSortInput>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  port?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface StringQueryOperatorInput {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
}


    declare global {
      export type ImageAssetFragment = { __typename: 'DatoCmsFileField', url?: string | null, gatsbyImageData?: any | null, isImage?: boolean | null };

export type TimelineInstanceFragment = { __typename: 'DatoCmsTimelineInstance', year?: string | null, heading?: string | null, description?: string | null };

export type DatoCmsEntitySkillFragment = { __typename: 'DatoCmsEntitySkill', id: string, title?: string | null, logo?: (
    { __typename?: 'DatoCmsFileField' }
    & ImageAssetFragment
  ) | null };

export type DatoCmsEntityPersonFragment = { __typename: 'DatoCmsEntityPerson', id: string, name?: string | null, positionTitle?: string | null, company?: string | null, headshot?: (
    { __typename?: 'DatoCmsFileField' }
    & ImageAssetFragment
  ) | null };

export type DatoCmsComponentCallToActionFragment = { __typename: 'DatoCmsComponentCallToAction', internalName?: string | null, id: string, label?: string | null, link?: string | null, isDark?: boolean | null, hoverColor?: string | null, icon?: string | null, buttonType?: string | null, size?: string | null };

export type DatoCmsComponentImageFragment = { __typename?: 'DatoCmsComponentImage', id: string, internalName?: string | null, title?: string | null, alt?: string | null, description?: string | null, caption?: string | null, desktopImage?: (
    { __typename?: 'DatoCmsFileField' }
    & ImageAssetFragment
  ) | null, mobileImage?: (
    { __typename?: 'DatoCmsFileField' }
    & ImageAssetFragment
  ) | null };

export type DatoCmsComponentTestimonialFragment = { __typename: 'DatoCmsComponentTestimonial', id: string, quote?: { __typename?: 'DatoCmsDatoCmsComponentTestimonialQuoteStructuredText', blocks?: Array<string | null> | null, value?: any | null, links?: Array<string | null> | null } | null, author?: (
    { __typename?: 'DatoCmsEntityPerson' }
    & DatoCmsEntityPersonFragment
  ) | null };

export type DatoCmsComponentTestimonialCarouselFragment = { __typename: 'DatoCmsComponentTestimonialCarousel', id: string, heading?: string | null, quotes?: Array<(
    { __typename?: 'DatoCmsComponentTestimonial' }
    & DatoCmsComponentTestimonialFragment
  ) | null> | null };

export type DatoCmsComponentHeroFragment = { __typename: 'DatoCmsComponentHero', id: string, internalName?: string | null, heading?: string | null, subheading?: string | null, featuredImage?: (
    { __typename?: 'DatoCmsComponentImage' }
    & DatoCmsComponentImageFragment
  ) | null, secondaryImage?: (
    { __typename?: 'DatoCmsComponentImage' }
    & DatoCmsComponentImageFragment
  ) | null, tertiaryImage?: (
    { __typename?: 'DatoCmsComponentImage' }
    & DatoCmsComponentImageFragment
  ) | null, body?: { __typename?: 'DatoCmsDatoCmsComponentHeroBodyStructuredText', blocks?: Array<string | null> | null, value?: any | null, links?: Array<(
      { __typename?: 'DatoCmsComponentCallToAction' }
      & DatoCmsComponentCallToActionFragment
    ) | null> | null } | null, ctas?: Array<(
    { __typename?: 'DatoCmsComponentCallToAction' }
    & DatoCmsComponentCallToActionFragment
  ) | null> | null };

export type DatoCmsComponentStoryFragment = { __typename: 'DatoCmsComponentStory', id: string, heading?: string | null, subheading?: string | null, timelineItems?: Array<(
    { __typename?: 'DatoCmsTimelineInstance' }
    & TimelineInstanceFragment
  ) | null> | null };

export type DatoCmsComponentSkillsBarFragment = { __typename: 'DatoCmsComponentSkillsBar', id: string, heading?: string | null, skills?: Array<(
    { __typename?: 'DatoCmsEntitySkill' }
    & DatoCmsEntitySkillFragment
  ) | null> | null };

export type LayoutSectionFragment = { __typename: 'DatoCmsLayoutSection', id: string, internalName?: string | null, desktopTopPadding?: string | null, desktopBottomPadding?: string | null, tabletTopPadding?: string | null, tabletBottomPadding?: string | null, mobileTopPadding?: string | null, mobileBottomPadding?: string | null, component?: (
    { __typename?: 'DatoCmsComponentHero' }
    & DatoCmsComponentHeroFragment
  ) | (
    { __typename?: 'DatoCmsComponentSkillsBar' }
    & DatoCmsComponentSkillsBarFragment
  ) | (
    { __typename?: 'DatoCmsComponentStory' }
    & DatoCmsComponentStoryFragment
  ) | (
    { __typename?: 'DatoCmsComponentTestimonialCarousel' }
    & DatoCmsComponentTestimonialCarouselFragment
  ) | null };

export type DatoCmsTemplatePageFragment = { __typename: 'DatoCmsTemplatePage', id: string, internalName?: string | null, title?: string | null, slug?: string | null, searchEngineOptimization?: { __typename?: 'DatoCmsSeoField', title?: string | null, description?: string | null, twitterCard?: string | null, image?: { __typename?: 'DatoCmsAsset', gatsbyImageData?: any | null } | null } | null, layouts?: Array<(
    { __typename?: 'DatoCmsLayoutSection' }
    & LayoutSectionFragment
  ) | null> | null };

export type DatoCmsTemplateProjectFragment = { __typename: 'DatoCmsTemplateProject', id: string, internalName?: string | null, slug?: string | null, link?: string | null, title?: string | null, year?: string | null, role?: string | null, featured?: boolean | null, framework?: string | null, cms?: string | null, github?: string | null, blurb?: string | null, featuredImage?: (
    { __typename?: 'DatoCmsComponentImage' }
    & DatoCmsComponentImageFragment
  ) | null, body?: { __typename?: 'DatoCmsDatoCmsTemplateProjectBodyStructuredText', blocks?: Array<string | null> | null, value?: any | null, links?: Array<(
      { __typename?: 'DatoCmsComponentImage' }
      & DatoCmsComponentImageFragment
    ) | null> | null } | null };

export type HomepageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQueryQuery = { __typename?: 'Query', datoCmsTemplatePage?: (
    { __typename?: 'DatoCmsTemplatePage' }
    & DatoCmsTemplatePageFragment
  ) | null };

export type ProjectListingQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectListingQueryQuery = { __typename?: 'Query', allDatoCmsTemplateProject: { __typename?: 'DatoCmsTemplateProjectConnection', nodes: Array<(
      { __typename?: 'DatoCmsTemplateProject' }
      & DatoCmsTemplateProjectFragment
    )> } };

export type TemplatePageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type TemplatePageQueryQuery = { __typename?: 'Query', datoCmsTemplatePage?: (
    { __typename?: 'DatoCmsTemplatePage' }
    & DatoCmsTemplatePageFragment
  ) | null };

export type TemplateProjectQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type TemplateProjectQueryQuery = { __typename?: 'Query', projectData?: (
    { __typename?: 'DatoCmsTemplateProject' }
    & DatoCmsTemplateProjectFragment
  ) | null };

    }