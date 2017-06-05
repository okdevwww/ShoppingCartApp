import {productGroup, condimentOperation} from '../product.models';

export class FakeProducts {

    static  getAll(): productGroup[] {

        return [
            {
                productGroupId:'13130770-c215-4404-a8cd-9fe72fa5eb06',
                label: 'Popular Dishes',
                icon: 'star',
                products: [
                    {
                        productId: '67e8ca3c-849e-4a21-862b-e26ae6953dc0',
                        label: 'Marinated Grilled Chicken Burger',
                        detail: 'Chicken breast, mozzarella cheese, tomato, garden leaves and smoked chipotle chilli mayo',
                        condiment: condimentOperation.force,
                        price: 4
                    },
                    {
                        productId: 'c3ceb76e-725c-4bf2-b740-8cfb9999e675',
                        label: 'Gourmet Steak Burger',
                        detail: 'Scotch fillet, lettuce, tomato, caramelised onion, pickled beetroot and peri peri aioli',
                        condiment: condimentOperation.force,
                        price: 6
                    }
                ]
            },
            {
                productGroupId: '55f266dc-6c37-4c11-b7c2-7b9cec778390',
                label: 'Deep Fried Meals',
                icon: '',
                products: [
                    {
                        productId: '7772170f-a09a-4d1a-9256-91e7af22b0d1',
                        label: 'Marinated Grilled Chicken Burger',
                        detail: 'Chicken breast, mozzarella cheese, tomato, garden leaves and smoked chipotle chilli mayo',
                        condiment: condimentOperation.force,
                        price: 23
                    },
                    {
                        productId: 'b4cf86e1-cbdd-4c09-8bb5-7767d21eaa35',
                        label: 'Gourmet Steak Burger',
                        detail: 'Scotch fillet, lettuce, tomato, caramelised onion, pickled beetroot and peri peri aioli',
                        condiment: condimentOperation.force,
                        price: 42
                    }
                ]
            }
        ]

    }

}
