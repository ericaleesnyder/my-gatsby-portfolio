export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type DatoCmsAsset = Node & {
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
};


export type DatoCmsAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsAssetFixedArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsAssetFluidArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type DatoCmsAssetGatsbyImageDataArgs = {
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
};


export type DatoCmsAssetResolutionsArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsAssetSizesArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type DatoCmsAssetUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetConnection = {
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
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetConnectionGroupArgs = {
  field: DatoCmsAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsAssetConnectionMaxArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetConnectionMinArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetConnectionSumArgs = {
  field: DatoCmsAssetFieldSelector;
};

export type DatoCmsAssetEdge = {
  __typename?: 'DatoCmsAssetEdge';
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
};

export type DatoCmsAssetFieldSelector = {
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
};

export type DatoCmsAssetFilterInput = {
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
};

export type DatoCmsAssetGroupConnection = {
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
};


export type DatoCmsAssetGroupConnectionDistinctArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetGroupConnectionGroupArgs = {
  field: DatoCmsAssetFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsAssetGroupConnectionMaxArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetGroupConnectionMinArgs = {
  field: DatoCmsAssetFieldSelector;
};


export type DatoCmsAssetGroupConnectionSumArgs = {
  field: DatoCmsAssetFieldSelector;
};

export type DatoCmsAssetSortInput = {
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
};

export type DatoCmsAssetVideo = {
  __typename?: 'DatoCmsAssetVideo';
  duration?: Maybe<Scalars['Int']>;
  frameRate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxPlaybackId?: Maybe<Scalars['String']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  exactRes?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  res?: InputMaybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: InputMaybe<DatoCmsAssetVideoThumbnailFormat>;
};

export type DatoCmsAssetVideoFieldSelector = {
  duration?: InputMaybe<FieldSelectorEnum>;
  frameRate?: InputMaybe<FieldSelectorEnum>;
  mp4Url?: InputMaybe<FieldSelectorEnum>;
  muxPlaybackId?: InputMaybe<FieldSelectorEnum>;
  streamingUrl?: InputMaybe<FieldSelectorEnum>;
  thumbnailUrl?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsAssetVideoFilterInput = {
  duration?: InputMaybe<IntQueryOperatorInput>;
  frameRate?: InputMaybe<IntQueryOperatorInput>;
  mp4Url?: InputMaybe<StringQueryOperatorInput>;
  muxPlaybackId?: InputMaybe<StringQueryOperatorInput>;
  streamingUrl?: InputMaybe<StringQueryOperatorInput>;
  thumbnailUrl?: InputMaybe<StringQueryOperatorInput>;
};

export enum DatoCmsAssetVideoMp4ResolutionQuality {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export type DatoCmsAssetVideoSortInput = {
  duration?: InputMaybe<SortOrderEnum>;
  frameRate?: InputMaybe<SortOrderEnum>;
  mp4Url?: InputMaybe<SortOrderEnum>;
  muxPlaybackId?: InputMaybe<SortOrderEnum>;
  streamingUrl?: InputMaybe<SortOrderEnum>;
  thumbnailUrl?: InputMaybe<SortOrderEnum>;
};

export enum DatoCmsAssetVideoThumbnailFormat {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export type DatoCmsColorField = {
  __typename?: 'DatoCmsColorField';
  alpha?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
};

export type DatoCmsColorFieldFieldSelector = {
  alpha?: InputMaybe<FieldSelectorEnum>;
  blue?: InputMaybe<FieldSelectorEnum>;
  green?: InputMaybe<FieldSelectorEnum>;
  hex?: InputMaybe<FieldSelectorEnum>;
  red?: InputMaybe<FieldSelectorEnum>;
  rgb?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsColorFieldFilterInput = {
  alpha?: InputMaybe<IntQueryOperatorInput>;
  blue?: InputMaybe<IntQueryOperatorInput>;
  green?: InputMaybe<IntQueryOperatorInput>;
  hex?: InputMaybe<StringQueryOperatorInput>;
  red?: InputMaybe<IntQueryOperatorInput>;
  rgb?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: InputMaybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsColorFieldSortInput = {
  alpha?: InputMaybe<SortOrderEnum>;
  blue?: InputMaybe<SortOrderEnum>;
  green?: InputMaybe<SortOrderEnum>;
  hex?: InputMaybe<SortOrderEnum>;
  red?: InputMaybe<SortOrderEnum>;
  rgb?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsFaviconMetaTags = {
  __typename?: 'DatoCmsFaviconMetaTags';
  tags?: Maybe<Scalars['JSON']>;
};

export type DatoCmsFaviconMetaTagsFieldSelector = {
  tags?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  tags?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsField = Node & {
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
  originalId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  position?: Maybe<Scalars['Int']>;
  validators?: Maybe<Scalars['JSON']>;
};

export type DatoCmsFieldConnection = {
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
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldConnectionGroupArgs = {
  field: DatoCmsFieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsFieldConnectionMaxArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldConnectionMinArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldConnectionSumArgs = {
  field: DatoCmsFieldFieldSelector;
};

export type DatoCmsFieldEdge = {
  __typename?: 'DatoCmsFieldEdge';
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
};

export type DatoCmsFieldFieldSelector = {
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
};

export type DatoCmsFieldFilterInput = {
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
};

export type DatoCmsFieldGroupConnection = {
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
};


export type DatoCmsFieldGroupConnectionDistinctArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldGroupConnectionGroupArgs = {
  field: DatoCmsFieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsFieldGroupConnectionMaxArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldGroupConnectionMinArgs = {
  field: DatoCmsFieldFieldSelector;
};


export type DatoCmsFieldGroupConnectionSumArgs = {
  field: DatoCmsFieldFieldSelector;
};

export type DatoCmsFieldSortInput = {
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
};

export type DatoCmsFileField = {
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
};


export type DatoCmsFileFieldCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsFileFieldFixedArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsFileFieldFluidArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type DatoCmsFileFieldGatsbyImageDataArgs = {
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
};


export type DatoCmsFileFieldResolutionsArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  width?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsFileFieldSizesArgs = {
  forceBlurhash?: InputMaybe<Scalars['Boolean']>;
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
};


export type DatoCmsFileFieldUrlArgs = {
  imgixParams?: InputMaybe<DatoCmsImgixParams>;
};

export type DatoCmsFixed = {
  __typename?: 'DatoCmsFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  sizes?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Int'];
};

export type DatoCmsFixedFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type DatoCmsFixedSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsFluid = {
  __typename?: 'DatoCmsFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type DatoCmsFluidFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type DatoCmsFluidSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsFocalPoint = {
  __typename?: 'DatoCmsFocalPoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type DatoCmsGlobalSeo = {
  __typename?: 'DatoCmsGlobalSeo';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

export type DatoCmsGlobalSeoFieldSelector = {
  facebookPageUrl?: InputMaybe<FieldSelectorEnum>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFieldSelector>;
  siteName?: InputMaybe<FieldSelectorEnum>;
  titleSuffix?: InputMaybe<FieldSelectorEnum>;
  twitterAccount?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsGlobalSeoFilterInput = {
  facebookPageUrl?: InputMaybe<StringQueryOperatorInput>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  siteName?: InputMaybe<StringQueryOperatorInput>;
  titleSuffix?: InputMaybe<StringQueryOperatorInput>;
  twitterAccount?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsGlobalSeoSortInput = {
  facebookPageUrl?: InputMaybe<SortOrderEnum>;
  fallbackSeo?: InputMaybe<DatoCmsSeoFieldSortInput>;
  siteName?: InputMaybe<SortOrderEnum>;
  titleSuffix?: InputMaybe<SortOrderEnum>;
  twitterAccount?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: InputMaybe<Scalars['String']>;
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
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: InputMaybe<Scalars['Int']>;
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
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. (undefined) */
  iptc?: InputMaybe<Scalars['String']>;
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
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  txtLig?: InputMaybe<Scalars['Int']>;
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
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: InputMaybe<Scalars['String']>;
};

export type DatoCmsLatLonField = {
  __typename?: 'DatoCmsLatLonField';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  __typename?: 'DatoCmsMetaField';
  createdAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFieldSelector = {
  createdAt?: InputMaybe<FieldSelectorEnum>;
  firstPublishedAt?: InputMaybe<FieldSelectorEnum>;
  isValid?: InputMaybe<FieldSelectorEnum>;
  publishedAt?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  firstPublishedAt?: InputMaybe<DateQueryOperatorInput>;
  isValid?: InputMaybe<BooleanQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type DatoCmsMetaFieldSortInput = {
  createdAt?: InputMaybe<SortOrderEnum>;
  firstPublishedAt?: InputMaybe<SortOrderEnum>;
  isValid?: InputMaybe<SortOrderEnum>;
  publishedAt?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsModel = Node & {
  __typename?: 'DatoCmsModel';
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  children: Array<Node>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<DatoCmsFaviconMetaTags>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  modularBlock?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  tree?: Maybe<Scalars['Boolean']>;
};

export type DatoCmsModelConnection = {
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
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelConnectionGroupArgs = {
  field: DatoCmsModelFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsModelConnectionMaxArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelConnectionMinArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelConnectionSumArgs = {
  field: DatoCmsModelFieldSelector;
};

export type DatoCmsModelEdge = {
  __typename?: 'DatoCmsModelEdge';
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
};

export type DatoCmsModelFieldSelector = {
  allLocalesRequired?: InputMaybe<FieldSelectorEnum>;
  apiKey?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  collectionAppeareance?: InputMaybe<FieldSelectorEnum>;
  draftModeActive?: InputMaybe<FieldSelectorEnum>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFieldSelector>;
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
};

export type DatoCmsModelFilterInput = {
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
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
};

export type DatoCmsModelGroupConnection = {
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
};


export type DatoCmsModelGroupConnectionDistinctArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelGroupConnectionGroupArgs = {
  field: DatoCmsModelFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsModelGroupConnectionMaxArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelGroupConnectionMinArgs = {
  field: DatoCmsModelFieldSelector;
};


export type DatoCmsModelGroupConnectionSumArgs = {
  field: DatoCmsModelFieldSelector;
};

export type DatoCmsModelSortInput = {
  allLocalesRequired?: InputMaybe<SortOrderEnum>;
  apiKey?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  collectionAppeareance?: InputMaybe<SortOrderEnum>;
  draftModeActive?: InputMaybe<SortOrderEnum>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsSortInput>;
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
};

export type DatoCmsSeoField = {
  __typename?: 'DatoCmsSeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

export type DatoCmsSeoFieldFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<DatoCmsAssetFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  twitterCard?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsSeoFieldFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<DatoCmsAssetFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  twitterCard?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsSeoFieldSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<DatoCmsAssetSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  twitterCard?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsSeoMetaTags = {
  __typename?: 'DatoCmsSeoMetaTags';
  tags?: Maybe<Scalars['JSON']>;
};

export type DatoCmsSeoMetaTagsFieldSelector = {
  tags?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: InputMaybe<JsonQueryOperatorInput>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  tags?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsSite = Node & {
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
};


export type DatoCmsSiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DatoCmsSiteConnection = {
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
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteConnectionGroupArgs = {
  field: DatoCmsSiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsSiteConnectionMaxArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteConnectionMinArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteConnectionSumArgs = {
  field: DatoCmsSiteFieldSelector;
};

export type DatoCmsSiteEdge = {
  __typename?: 'DatoCmsSiteEdge';
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
};

export type DatoCmsSiteFieldSelector = {
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
};

export type DatoCmsSiteFilterInput = {
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
};

export type DatoCmsSiteGroupConnection = {
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
};


export type DatoCmsSiteGroupConnectionDistinctArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteGroupConnectionGroupArgs = {
  field: DatoCmsSiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsSiteGroupConnectionMaxArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteGroupConnectionMinArgs = {
  field: DatoCmsSiteFieldSelector;
};


export type DatoCmsSiteGroupConnectionSumArgs = {
  field: DatoCmsSiteFieldSelector;
};

export type DatoCmsSiteSortInput = {
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
};

export type DatoCmsTemplatePage = Node & {
  __typename?: 'DatoCmsTemplatePage';
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  internalName?: Maybe<Scalars['String']>;
  meta: DatoCmsMetaField;
  model?: Maybe<DatoCmsModel>;
  originalId: Scalars['String'];
  parent?: Maybe<Node>;
  searchEngineOptimization?: Maybe<DatoCmsSeoField>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DatoCmsTemplatePageConnection = {
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
};


export type DatoCmsTemplatePageConnectionDistinctArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageConnectionGroupArgs = {
  field: DatoCmsTemplatePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsTemplatePageConnectionMaxArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageConnectionMinArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageConnectionSumArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};

export type DatoCmsTemplatePageEdge = {
  __typename?: 'DatoCmsTemplatePageEdge';
  next?: Maybe<DatoCmsTemplatePage>;
  node: DatoCmsTemplatePage;
  previous?: Maybe<DatoCmsTemplatePage>;
};

export type DatoCmsTemplatePageFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldFieldSelector>;
  model?: InputMaybe<DatoCmsModelFieldSelector>;
  originalId?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFieldSelector>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type DatoCmsTemplatePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<DatoCmsMetaFieldFilterInput>;
  model?: InputMaybe<DatoCmsModelFilterInput>;
  originalId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type DatoCmsTemplatePageGroupConnection = {
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
};


export type DatoCmsTemplatePageGroupConnectionDistinctArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageGroupConnectionGroupArgs = {
  field: DatoCmsTemplatePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsTemplatePageGroupConnectionMaxArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageGroupConnectionMinArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};


export type DatoCmsTemplatePageGroupConnectionSumArgs = {
  field: DatoCmsTemplatePageFieldSelector;
};

export type DatoCmsTemplatePageSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalName?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<DatoCmsMetaFieldSortInput>;
  model?: InputMaybe<DatoCmsModelSortInput>;
  originalId?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldSortInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type DatoCmsTextNode = Node & {
  __typename?: 'DatoCmsTextNode';
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type DatoCmsTextNodeConnection = {
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
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeConnectionGroupArgs = {
  field: DatoCmsTextNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsTextNodeConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeConnectionMinArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeConnectionSumArgs = {
  field: DatoCmsTextNodeFieldSelector;
};

export type DatoCmsTextNodeEdge = {
  __typename?: 'DatoCmsTextNodeEdge';
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsTextNodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type DatoCmsTextNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type DatoCmsTextNodeGroupConnection = {
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
};


export type DatoCmsTextNodeGroupConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeGroupConnectionGroupArgs = {
  field: DatoCmsTextNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DatoCmsTextNodeGroupConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeGroupConnectionMinArgs = {
  field: DatoCmsTextNodeFieldSelector;
};


export type DatoCmsTextNodeGroupConnectionSumArgs = {
  field: DatoCmsTextNodeFieldSelector;
};

export type DatoCmsTextNodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type DatoCmsVideoField = {
  __typename?: 'DatoCmsVideoField';
  height?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export enum DatoImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type Directory = Node & {
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
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
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
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
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
};

export type DirectoryFilterInput = {
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
};

export type DirectoryGroupConnection = {
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
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
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
};

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export type File = Node & {
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
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
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
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldSelector = {
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
};

export type FileFilterInput = {
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
};

export type FileGroupConnection = {
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
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
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
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

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

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
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
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allDatoCmsAsset: DatoCmsAssetConnection;
  allDatoCmsField: DatoCmsFieldConnection;
  allDatoCmsModel: DatoCmsModelConnection;
  allDatoCmsSite: DatoCmsSiteConnection;
  allDatoCmsTemplatePage: DatoCmsTemplatePageConnection;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  datoCmsField?: Maybe<DatoCmsField>;
  datoCmsModel?: Maybe<DatoCmsModel>;
  datoCmsSite?: Maybe<DatoCmsSite>;
  datoCmsTemplatePage?: Maybe<DatoCmsTemplatePage>;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDatoCmsAssetArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsAssetSortInput>>>;
};


export type QueryAllDatoCmsFieldArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsFieldFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsFieldSortInput>>>;
};


export type QueryAllDatoCmsModelArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsModelFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsModelSortInput>>>;
};


export type QueryAllDatoCmsSiteArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsSiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsSiteSortInput>>>;
};


export type QueryAllDatoCmsTemplatePageArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTemplatePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTemplatePageSortInput>>>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<DatoCmsTextNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatoCmsTextNodeSortInput>>>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
};


export type QueryDatoCmsAssetArgs = {
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
};


export type QueryDatoCmsFieldArgs = {
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
};


export type QueryDatoCmsModelArgs = {
  allLocalesRequired?: InputMaybe<BooleanQueryOperatorInput>;
  apiKey?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  collectionAppeareance?: InputMaybe<StringQueryOperatorInput>;
  draftModeActive?: InputMaybe<BooleanQueryOperatorInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  fields?: InputMaybe<DatoCmsFaviconMetaTagsFilterInput>;
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
};


export type QueryDatoCmsSiteArgs = {
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
};


export type QueryDatoCmsTemplatePageArgs = {
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
  searchEngineOptimization?: InputMaybe<DatoCmsSeoFieldFilterInput>;
  seoMetaTags?: InputMaybe<DatoCmsSeoMetaTagsFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryDatoCmsTextNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fallbackLocales?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryDirectoryArgs = {
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
};


export type QueryFileArgs = {
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
};


export type QuerySiteArgs = {
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
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
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
};


export type QuerySitePageArgs = {
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
};


export type QuerySitePluginArgs = {
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
};

export type Site = Node & {
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
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
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
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
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
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
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
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
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
};

export type SiteFilterInput = {
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
};

export type SiteFunction = Node & {
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
};

export type SiteFunctionConnection = {
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
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
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
};

export type SiteFunctionFilterInput = {
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
};

export type SiteFunctionGroupConnection = {
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
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
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
};

export type SiteGraphqlTypegen = {
  __typename?: 'SiteGraphqlTypegen';
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
  typesOutputPath?: Maybe<Scalars['String']>;
};

export type SiteGraphqlTypegenFieldSelector = {
  documentSearchPaths?: InputMaybe<FieldSelectorEnum>;
  generateOnBuild?: InputMaybe<FieldSelectorEnum>;
  typesOutputPath?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGraphqlTypegenFilterInput = {
  documentSearchPaths?: InputMaybe<StringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGraphqlTypegenSortInput = {
  documentSearchPaths?: InputMaybe<SortOrderEnum>;
  generateOnBuild?: InputMaybe<SortOrderEnum>;
  typesOutputPath?: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
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
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SitePage = Node & {
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
};

export type SitePageConnection = {
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
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
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
};

export type SitePageFilterInput = {
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
};

export type SitePageGroupConnection = {
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
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
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
};

export type SitePlugin = Node & {
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
};

export type SitePluginConnection = {
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
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
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
};

export type SitePluginFilterInput = {
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
};

export type SitePluginGroupConnection = {
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
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
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
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
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
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type DatoCmsTemplatePageFragment = { __typename: 'DatoCmsTemplatePage', id: string, internalName?: string | null, title?: string | null, slug?: string | null, searchEngineOptimization?: { __typename?: 'DatoCmsSeoField', title?: string | null, description?: string | null, twitterCard?: string | null, image?: { __typename?: 'DatoCmsAsset', gatsbyImageData?: any | null } | null } | null };

export type TemplatePageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type TemplatePageQueryQuery = { __typename?: 'Query', pageData?: { __typename: 'DatoCmsTemplatePage', id: string, internalName?: string | null, title?: string | null, slug?: string | null, searchEngineOptimization?: { __typename?: 'DatoCmsSeoField', title?: string | null, description?: string | null, twitterCard?: string | null, image?: { __typename?: 'DatoCmsAsset', gatsbyImageData?: any | null } | null } | null } | null };
