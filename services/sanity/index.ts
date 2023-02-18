// node modules
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

// local files
import { config } from './config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);
