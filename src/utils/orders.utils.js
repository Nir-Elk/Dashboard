import moment from 'moment'



export function mappingOrdersToView(orders) {
    return orders.map(({
        line_items,
        id,
        email,
        processed_at,
        total_price,
        subtotal_price,
        total_tax,
        total_discount,
        customer
    }) => {

        const products = line_items.map(({
            variant_id,
            name,
            quantity,
            price,
            tax_lines
        }) => ({
            id: variant_id,
            name,
            quantity,
            price,
            tax: (tax_lines[0].price)
        }));

        return {
            id,
            customerId: customer.id,
            email,
            productsNum: line_items.length,
            processed_at: moment(processed_at).format('DD/MM/YYYY'),
            total_price,
            subtotal_price,
            total_tax,
            total_discount,
            products,
            full_name: customer.first_name + ' ' + customer.last_name,
            total_spent: customer.total_spent
        };
    })
}
