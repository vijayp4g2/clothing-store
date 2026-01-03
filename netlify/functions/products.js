// Netlify serverless function for products API
const products = [
    {
        id: 1,
        name: 'Classic Oxford Shirt',
        price: 4149,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWSlM670fV4aE6PlPKiQQnyYm2CwBOdW3rsuS6wEYaqIY28jmGQh8ZCLh3bHRN8xNsF-QMy8WukzQa825nurVKK8ZTZLlV4HsIx4HQc5QwZvf41OPVB8xRWuH34YP5n00zkz_7Ta7HYzGouSeHBoIsvpGQ8e_WfUC_eFsCnsIav-3o-unJ4-k7RzKNInHfITPxrlUCaPVBitVDAq18ZJlMsAd2YMZRHcBXRRZ0MTkyGLYOsLgEx-6D25HYMgq0Lb2fHBn1IUuzySs'
    },
    {
        id: 2,
        name: 'Linen Blend Shirt',
        price: 4979,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrooFZ5MWCg__tR0LT1d0GooFRMR4Pbgf6VGXtVhlQcEtluw-Y8HdFQ2l48MZrw0Rp0vNuqRtxw7EYaB5KpYtZVJV5LyVUvxedEC55hav4EQ3tg6b9CSDHsRUlKZ7GRFyLnkt9MU5yR6wGvZ4RQlQwY7MYFTTO1g-pgeMhWImgWVDcooSVzUeXKgel9owWtqkM3SOvJ5WBQQLPX3vN2b9fRyq6nb-U2zEp5ywK93KksCNNhz0-PSCp0c3mSBHDptlV5fsWkwa6xsE'
    },
    {
        id: 3,
        name: 'Slim Fit Check Shirt',
        price: 4564,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCILiSG9iBFVJvLcNzu6HaBwcFykCumdypQFwIjwYec_S8n2X2qjUp38K05MBbNGmYjGFVkQbfEFkWaxpH2WqD9w3GvBcLhVZeImWt7Godm6oD1oPy5DT4cWWYDUEmzI-UV4iu05mjqcRO5kpq-R2KZOQ7pPQW6tjb0lPjCTTGIYuavIUyAwe6yEGm61YHeO_ieFb133BAMNTz5n_PWNlS6PM9VO1w9SkDKjWfMN8Bbgp2aA3-krk42PR2QtpUg6c1ExH8iW3_0bHo'
    },
    {
        id: 4,
        name: 'Denim Work Shirt',
        price: 5809,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy0h4sGnqbFGUrDy8UP_pe1tvreIf4tP8FXroHkWsJmyvmWUyB5lVOCLzvhpWOF8h_Ycb201D5SVb2oQhNP8QCbNpZcq7bV2ILEURo1JUoAHYkKZaK_sTijbV6Ev7NHO8sdhjP3g4Pk6k2A9mkvHYgxcyL9nzyIqdAwlTrFx7bnJxySzbmqXE__QXb8YWIPBnfwU7wDLTwTOFWaFZIw5LLILojlmJiOhjW6ORPpNBKSUr8gwa3kIE2oew2wnMjkzTp52U7IwqeyxQ'
    },
    {
        id: 5,
        name: 'Casual Striped Shirt',
        price: 4149,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqgTOCIheTPILq2JR88xxnP5AJ5h30XWhtmqdYJZ7Vuc9tkqgarVvsNpO0BcgC77pGPQuhRsZakndTQSA8LgRbqbZr3B7xWuWCn6dWI7968N9YpUpGyO1AW7tTQzAxswW1OZUpZSfs4WhAfOuSLwwrBco6lla-hhYUpcx74l-HS6tlBM2El4Ff6BfVP3glw5xHOQNFy3j_X33mJpf8GL_hSXvb__4osy_qYQFA3H87rg6goxE7tS_KWv1agpLnqfwhJCAnq3RIN40'
    },
    {
        id: 6,
        name: 'Modern Polo Shirt',
        price: 3735,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWVD953snRdXcJBIhRPjTkKdWqek4ojEm3sPXw8VklC3JT6sSGzMxCcloxxzsqOwjjeIcjLc-sOTarwQLl3tkHE_NuqWEdC-NZlAO3X45oD08hYo6fMSI8bO20eEhEbQY93vGPO_WYxbAGAAyQ2fATxrDSufZW0EcGaZ2ESqBr0tBtCKBZSgyqPLoV2I7yo31N7xjNup2etXbgg-KFkMjjR31JbC9DC8rq_NAV_Fj_WoW7f3ioCf--1aUeQErVYR6wvxIjDtbCRs0'
    },
    {
        id: 7,
        name: 'Flannel Plaid Shirt',
        price: 5394,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKxBShv-Jk3McoNaD-a67GeHxCvxXoy2dctd3yCuY_k6cUWF8-wJSaxXEG3CnDYavJBdAu7d6DpbmsDrVfRUYPhsHQ2V-puwoEwWcIS50Y0xoKYpajYfYiydJexp8YycIs5XRd9HLyMBl8U-EAcsHhHKeC22PKba5PMIcR6aJT4hBj9pfHqJIEZsAGnRHbGVSVG6WEyUf06IwUzh9f-rEj5zZ67URfReQjHqD54VpakAlzeawgWC8gQnEDxzSRFZctUQYQcJG7krA'
    },
    {
        id: 8,
        name: 'Short-Sleeve Button-Down',
        price: 3568,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe0TR2owU4UgrHTK9his9XJ1ezFz-cD3wy8kmqaCYnOAh6sL6T0CwY3uM0SNtCkrGYo7sg5oYMFVy-j9bzWS607MOEtvcd0QYnuzvvYnkYwo1XjYuuuVbvJCS1vdna8OQRqDx5HYv332yKDFd96QZOSDIvOnnY4c5DRQADF08xpHlH3Pz3y7960lzAy-zZ4UYPG5509k3JrV4Ot-TFGned3L7fOcN4nqaApvs9tinhWjt8gtU5MeClfJmyQkkJoK4zRtZUMq3VMMU'
    },
    {
        id: 9,
        name: 'Classic Crewneck Sweater',
        price: 6225,
        category: 'Other',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEnxmOUeQw2Biv_6JsFnCNoZc3RDLZMpn0RZkbPiIWFOP4lMro2m7CqHZu8cez-mYPUMp0aVkMQ-BkMy_SZZGAOTlB1xkIH3hYzKYtUkaYG2V0Nb0lsqjNAjY0ZgwlW_n5DUbmEm0BNc5jW7P3HrBssSU2qeaRB-fgca73jgyvEjielUpq1xFxYDm-siBtq2GaHA3j9qMXHIl2towtFc9J5vzp6nCAKMVj0HmkQ_Z5H54Ym576S8X3MXgPbFLVsqAnxr5Bplj1uFg'
    },
    {
        id: 10,
        name: 'Modern Slim-Fit Chinos',
        price: 6640,
        category: 'Other',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl2X6M_GBcF_1hjHvbS7LsOq2qtivHunZyphEIUQmTqjQQouHwX-ptWbUBpjeRzFprNksp6rgl_aREGrbwj1zWVvb0k_3KEY95w9au25deYwZ_rw6dCb0PVBEvURK-zazK9p1PA3iOU38rdHg_IAqOt2ZxBghIWTSBLXlz0P2fAS1CqaexpwlME0xGkSc5H7Eh0jYRgHyS_iwMIeT62ItMcM_Uqq-iGenn5Hdqt9DZ5zwlQo0W57YUyFdd1Yxcptg7opBB4dUOUIg'
    },
    {
        id: 11,
        name: 'The Essential Denim Jacket',
        price: 9960,
        category: 'Other',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT-lig4CJm6MNPqWEf3--R8f33dRrsKSiqucH-fqpSeTH8bWV76jeYkt7m_hJ5-NsJ-6Sq6t24744J7JrQOKgraj_efl18uj1RS0SZl7tzl-p-nZoHpboKMAgMxuk3M8yvgAbjvp9VdNUOVUviSyjy4PRpAxb8DnimbI8AC-FfOwaLirEHiVLG5lSdBMP45v7iihrCFTta1hBj8bDAWx_ZSyeaPxx4umGnk6BplTn30GRYmtxk8y746vU4--xtGUV-6QOTipWbE0M'
    },
    {
        id: 12,
        name: 'Linen Button-Down Shirt',
        price: 5395,
        category: 'Shirts',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtqcGd2uHNeVgP9fG0umZms0JdQcx2Vr57QdBm2DmXPO2BZM5ZtnpgfztjFG7BW0NN5f3dh2omD2w3yq3AOe82k2so6EP-XCsZECeJE_7hFw5mxB74ak18nRKtZfCeQPc_bwpwf3R_4RNUVtJgP55k2fOxqkYp6978HSQ-OX8DFOBHqiAkSbN1ME3DbjH_MXDcm3Y6Ms3yctHAt5CSKxPk1U5Ia6_qlTfyKuH8uPJn-vKdxisWZxvrlNLHXp7RsQUpMXmVv2bBbJg'
    }
];

exports.handler = async (event, context) => {
    // Handle CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle OPTIONS request for CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // GET all products
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(products)
        };
    }

    // Method not allowed
    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ message: 'Method not allowed' })
    };
};
