export async function load({fetch, params}) {
    console.log(params);
    const param = params;
    try {
        const response = await fetch('/api/board/detail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        });
        if (response.ok) {
            console.log('연동 성공');
            console.log(param)
            const data = await response.json();
            return data;
        } else {
            // 실패 처리
            console.log('연동 실패')
        }
    } catch (error) {
        // 에러 처리
    }
}