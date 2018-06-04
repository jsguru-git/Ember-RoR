import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  	'Condo',
  	'Townhouse',
  	'Apartment'
];

export function packPropertyType([propertyType]) {
  	if (communityPropertyTypes.includes(propertyType)) {
    	return 'Community';
  	}

  	return 'Standalone';
}

export default helper(packPropertyType);
